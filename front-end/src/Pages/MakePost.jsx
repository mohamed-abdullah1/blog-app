// import { useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
// import SuccessText from "../components/SuccessText";
// import { Link } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
const MakePost = () => {
  const [content, setContent] = useState("");
  const [headline, setHeadline] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(content);
  };
  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="card"
        editorClassName="card-body"
        onEditorStateChange={(newState) => {
          setEditorState(newState);
          setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
          console.log(content);
        }}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "history",
            "embedded",
            "emoji",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </>
  );
};
export default MakePost;
