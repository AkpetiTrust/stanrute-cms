import React from "react";
import style from "./index.module.css";
import image from "./card-image.png";

export default function Draft({ title }) {
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
          <button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0605 1.93948C12.7792 1.65828 12.3977 1.50031 12 1.50031C11.6023 1.50031 11.2208 1.65828 10.9395 1.93948L5.25 7.62898V9.74998H7.371L13.0605 4.06048C13.3417 3.77919 13.4997 3.39773 13.4997 2.99998C13.4997 2.60224 13.3417 2.22078 13.0605 1.93948Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 4.5C1.5 4.10218 1.65804 3.72064 1.93934 3.43934C2.22064 3.15804 2.60218 3 3 3H6C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5H3V12H10.5V9C10.5 8.80109 10.579 8.61032 10.7197 8.46967C10.8603 8.32902 11.0511 8.25 11.25 8.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9V12C12 12.3978 11.842 12.7794 11.5607 13.0607C11.2794 13.342 10.8978 13.5 10.5 13.5H3C2.60218 13.5 2.22064 13.342 1.93934 13.0607C1.65804 12.7794 1.5 12.3978 1.5 12V4.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={style.progress}>
          <progress max={100} value={50}></progress>
          <div className={style.progress_status}>
            <p>50%</p> <p>Complete</p>
          </div>
        </div>
        <p className={style.label}>Highlights:</p>
        <div className={style.btn_group}>
          <button className={`${style.btn} ${style.btn_blue}`}>Concepts</button>
        </div>
      </div>
    </div>
  );
}
