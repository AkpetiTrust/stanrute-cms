import React, { useState } from "react";
import Highlight from "../Highlight/Highlight";
import style from "./index.module.css";
import generateRandomColor from "../../../../../../utils/functions/generateRandomColor";

function Highlights({ highlights, setHighlights }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!value) return;
    setHighlights((prevHighlights) => [
      ...prevHighlights,
      { text: value, color: generateRandomColor() },
    ]);
    setValue("");
  };

  return (
    <div className={style.highlights}>
      <p className={style.label}>Highlights:</p>
      <div className={style.row}>
        {highlights.map((highlight) => (
          <Highlight
            text={highlight.text}
            color={highlight.color}
            setHighlights={setHighlights}
            key={highlight.text}
          />
        ))}
        <div className={style.input_group}>
          <input
            type="text"
            placeholder="Add Highlight"
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />

          <button onClick={handleClick}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7.5C15.3978 7.5 15.7794 7.65804 16.0607 7.93934C16.342 8.22064 16.5 8.60218 16.5 9V13.5H21C21.3978 13.5 21.7794 13.658 22.0607 13.9393C22.342 14.2206 22.5 14.6022 22.5 15C22.5 15.3978 22.342 15.7794 22.0607 16.0607C21.7794 16.342 21.3978 16.5 21 16.5H16.5V21C16.5 21.3978 16.342 21.7794 16.0607 22.0607C15.7794 22.342 15.3978 22.5 15 22.5C14.6022 22.5 14.2206 22.342 13.9393 22.0607C13.658 21.7794 13.5 21.3978 13.5 21V16.5H9C8.60218 16.5 8.22064 16.342 7.93934 16.0607C7.65804 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.65804 14.2206 7.93934 13.9393C8.22064 13.658 8.60218 13.5 9 13.5H13.5V9C13.5 8.60218 13.658 8.22064 13.9393 7.93934C14.2206 7.65804 14.6022 7.5 15 7.5V7.5Z"
                fill="#808080"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
