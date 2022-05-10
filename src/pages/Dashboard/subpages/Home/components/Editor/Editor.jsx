import React from "react";
import style from "./index.module.css";

function Editor({ course, setEditorShown }) {
  return (
    <div
      className={style.editor_container}
      onClick={(e) => {
        if (e.target.className === style.editor_container) {
          setEditorShown(false);
        }
      }}
    >
      <div className={style.inner}>
        <button
          onClick={() => {
            setEditorShown(false);
          }}
          className={style.close}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7329 10.7325C11.2018 10.2638 11.8375 10.0005 12.5004 10.0005C13.1634 10.0005 13.7991 10.2638 14.2679 10.7325L25.0004 21.465L35.7329 10.7325C35.9636 10.4937 36.2394 10.3032 36.5444 10.1722C36.8494 10.0412 37.1775 9.97222 37.5094 9.96933C37.8414 9.96645 38.1706 10.0297 38.4778 10.1554C38.7851 10.2811 39.0642 10.4667 39.2989 10.7015C39.5337 10.9362 39.7193 11.2153 39.845 11.5226C39.9707 11.8298 40.034 12.159 40.0311 12.491C40.0282 12.8229 39.9592 13.151 39.8282 13.456C39.6972 13.761 39.5067 14.0368 39.2679 14.2675L28.5354 25L39.2679 35.7325C39.7233 36.204 39.9753 36.8355 39.9696 37.491C39.9639 38.1465 39.701 38.7735 39.2375 39.237C38.774 39.7005 38.1469 39.9634 37.4914 39.9691C36.836 39.9748 36.2044 39.7229 35.7329 39.2675L25.0004 28.535L14.2679 39.2675C13.7964 39.7229 13.1649 39.9748 12.5094 39.9691C11.8539 39.9634 11.2269 39.7005 10.7634 39.237C10.2999 38.7735 10.037 38.1465 10.0313 37.491C10.0256 36.8355 10.2775 36.204 10.7329 35.7325L21.4654 25L10.7329 14.2675C10.2643 13.7986 10.001 13.1629 10.001 12.5C10.001 11.837 10.2643 11.2013 10.7329 10.7325Z"
              fill="#808080"
            />
          </svg>
        </button>
        <p className={style.title}>{!!course ? "Edit post" : "Make post"}</p>
        <div className={style.options}></div>
        <p className={style.course_title}></p>
        <div className={style.btn_group}>
          <button>Publish</button>
          <button>Add to draft</button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
