import React, { useState } from "react";
import style from "./index.module.css";
import image from "./card-image.png";
import rating from "./Rating.svg";
import Options from "../Options/Options";
import { Ellipsis } from "../../../../../../components";

export default function PublishedCourse({ title, setEditorShown }) {
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  return (
    <div className={style.card}>
      <button className={`${style.btn} ${style.status}`} disabled>
        Recent
      </button>
      <div className={style.card_image_container}>
        <img src={image} alt="Stanrute Academy" />
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
            {optionsAreShown && <Options setEditorShown={setEditorShown} />}
            <Ellipsis />
          </div>
        </div>
        <img src={rating} alt="rating" />
        <p className={style.label}>Highlights:</p>
        <div className={style.btn_group}>
          <button className={`${style.btn} ${style.btn_blue}`}>Concepts</button>
          <button className={`${style.btn} ${style.btn_yellow}`}>
            Strategies
          </button>
          <button className={`${style.btn} ${style.btn_green}`}>
            Trade terms
          </button>
        </div>
      </div>
    </div>
  );
}
