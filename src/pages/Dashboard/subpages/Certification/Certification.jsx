import React from "react";
import FileInput from "./components/FileInput/FileInput";
import style from "./index.module.css";

function Certificate() {
  return (
    <div>
      <div className={style.inner}>
        <FileInput />
      </div>
    </div>
  );
}

export default Certificate;
