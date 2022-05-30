import React from "react";
import { RichUtils, EditorState, AtomicBlockUtils } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../../../../../../utils/instances/firebase";
import { onAddLink } from "../EditorLink/EditorLink";

function ControlButton({
  control: { icon, isBlock, style },
  setEditorState,
  editorState,
  setHTMLValue,
}) {
  const handleClick = () => {
    if (style === "LINK") {
      return onAddLink(editorState, setEditorState);
    }

    if (isBlock) {
      const newEditorState = RichUtils.toggleBlockType(editorState, style);
      setHTMLValue(stateToHTML(newEditorState.getCurrentContent()));
      setEditorState(newEditorState);
    } else {
      const newEditorState = RichUtils.toggleInlineStyle(editorState, style);
      setHTMLValue(stateToHTML(newEditorState.getCurrentContent()));
      setEditorState(newEditorState);
    }
  };

  const insertImage = (url) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
  };

  const handleChange = (e) => {
    let image = e.currentTarget.files[0];
    let formData = new FormData();
    formData.append("image", image);

    const storageRef = ref(storage, image.name);

    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const newState = insertImage(url);
        setEditorState(newState);
        setHTMLValue(stateToHTML(newState.getCurrentContent()));
      });
    });
  };

  const selection = editorState.getSelection();
  const active =
    editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType() === style || editorState.getCurrentInlineStyle().has(style);

  return style !== "IMAGE" ? (
    <button className={`${active ? "active" : ""}`} onClick={handleClick}>
      {icon}
    </button>
  ) : (
    <form>
      <label htmlFor="file">{icon}</label>
      <input onChange={handleChange} type="file" name="file" id="file" />
    </form>
  );
}

export default ControlButton;
