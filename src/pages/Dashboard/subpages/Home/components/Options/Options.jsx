import React from "react";
import style from "./index.module.css";

function Options({ setEditorShown }) {
  return (
    <div className={style.options}>
      <p
        onClick={() => {
          setEditorShown(true);
        }}
      >
        Edit course
      </p>
      <p className={style.delete}>Delete</p>
    </div>
  );
}

export default Options;
