import React, { useState } from "react";
import style from "./index.module.css";
import fallBackImage from "./card-image.png";
import rating from "./Rating.svg";
import Options from "../Options/Options";
import { Ellipsis } from "../../../../../../components";

export default function PublishedCourse({
  publishedCourse: { title, image, highlights, _id },
  setEditorShown,
  setPublishedCourses,
}) {
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  return (
    <div className={style.card}>
      <button className={`${style.btn} ${style.status}`} disabled>
        Recent
      </button>
      <div className={style.card_image_container}>
        <img src={image || fallBackImage} alt="Stanrute Academy" />
      </div>
      <div className={style.card_talk}>
        <div className={style.title_container}>
          <p className="text-primary">{title}</p>
          <div
            tabIndex={3}
            onFocus={() => {
              setOptionsAreShown(true);
            }}
            onBlur={() => {
              setOptionsAreShown(false);
            }}
          >
            {optionsAreShown && (
              <Options
                setPublishedCourses={setPublishedCourses}
                _id={_id}
                setEditorShown={setEditorShown}
              />
            )}
            <Ellipsis />
          </div>
        </div>
        <img src={rating} alt="rating" />
        <p className={style.label}>Highlights:</p>
        <div className={style.btn_group}>
          {JSON.parse(highlights).map((highlight) => (
            <button
              key={highlight.text}
              style={{ color: "#fff", backgroundColor: highlight.color.dark }}
              className={`${style.btn}`}
            >
              {highlight.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
