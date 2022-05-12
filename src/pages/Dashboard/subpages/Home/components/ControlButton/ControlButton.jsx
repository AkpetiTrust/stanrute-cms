import React from "react";
import { RichUtils } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

function ControlButton({
  control: { icon, isBlock, style },
  setEditorState,
  editorState,
  setHTMLValue,
}) {
  const handleClick = () => {
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

  return <button onClick={handleClick}>{icon}</button>;
}

export default ControlButton;
