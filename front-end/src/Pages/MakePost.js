import { useEffect, useState } from "react";
import { Container } from "./styles/MakePost.styled";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const MakePost = ({ categoriesOptions: cats }) => {
  const [categories, setCategories] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();
  const [content, setContent] = useState(``);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [categoriesOptions, setCategoriesOptions] = useState(cats);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      writer_id: currentUser._id,
      title,
      desc,
      img,
      categories,
      content,
    });
    setLoading(true);
    axios
      .post(
        "posts/",
        {
          writer_id: currentUser._id,
          title,
          desc,
          img,
          categories,
          content,
        },
        { headers: { token: `Bearer ${currentUser.accessToken}` } }
      )
      .then((res) => {
        console.log("success", res);
        navigate(`/profile/${currentUser._id}`);
      })
      .catch((err) => alert("there is something wrong try again.."))
      .finally(() => {
        setLoading(false);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(
        `posts/${state._id}`,
        {
          writer_id: currentUser._id,
          title,
          desc,
          img,
          categories,
          content,
        },
        {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`/profile/${currentUser._id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("try again! there is problem");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log("make cats", categoriesOptions);
    if (state) {
      setTitle(state?.title);
      setDesc(state?.desc);
      setContent(state?.content);
      const contentBlock = htmlToDraft(state?.content);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
      setImg(state?.img);
      setCategories(state?.categories);
    }
  }, []);

  return (
    <Container>
      <div>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Image Url for the Blog"
          variant="outlined"
          required
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div
        style={{
          maxHeight: "200px",
          overflow: "auto",
          minHeight: "150px",
          border: "solid #d6d6d6 1px",
          borderRadius: "10px",
        }}
      >
        <Editor
          style={{ border: "solid red 1px" }}
          editorState={editorState}
          wrapperClassName="card"
          editorClassName="card-body"
          onEditorStateChange={(newState) => {
            setEditorState(newState);
            setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
            console.log(content);
          }}
          toolbar={{
            options: ["inline", "list", "textAlign", "history"],
            inline: { inDropdown: false },

            list: { inDropdown: false },
            textAlign: { inDropdown: false },
            history: { inDropdown: false },
          }}
        />
      </div>
      <div>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={categoriesOptions}
          getOptionLabel={(option) => option}
          defaultValue={[categoriesOptions[0]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories"
              placeholder="Categories"
              required={
                params.InputProps.startAdornment?.length > 0 ? false : true
              }
            />
          )}
          onChange={(e, newVal) => setCategories(newVal)}
        />
      </div>
      <div>
        <h1>Preview</h1>
        <div>
          <div>
            <h2>{title || ""}</h2>
          </div>
          <div style={{ color: "#bcbcbc" }}>{desc || ""}</div>
          <div
            style={{
              minWidth: "100px",
              minHeight: "100px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={img || ""}
              alt="of blog"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <div>
        {state ? (
          <button disabled={loading} onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button disabled={loading} onClick={handleSubmit} type="submit">
            Create
          </button>
        )}
      </div>
    </Container>
  );
};
export default MakePost;
