import React from "react";
import style from "./index.module.css";

function Preview({
  previewProps: { HTMLValue, courseTitle, courseCover, objectives },
}) {
  return (
    <div className={style.preview}>
      <img src={courseCover} alt="cover" />
      <h1 className={style.title}>{courseTitle}</h1>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: HTMLValue }}
      ></div>
    </div>
  );
}

export default Preview;
