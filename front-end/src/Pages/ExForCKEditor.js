import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ReactHtmlParser from "react-html-parser";
import { useState } from "react";

const ExForCKEditor = () => {
  const [postBody, setPostBody] = useState("");
  const handleChange = (e, editor) => {
    console.log(editor);
    const data = editor.getData();
    setPostBody(data);
    console.log("data", data);
  };

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={postBody}
        onChange={handleChange}
      />
    </>
  );
};

export default ExForCKEditor;
