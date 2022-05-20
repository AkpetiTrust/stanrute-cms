import React from "react";
import style from "./index.module.css";
import { constants } from "../../../../../../constants";

function Options({ setEditorShown, setPublishedCourses, _id }) {
  const { apiUrl, token } = constants;

  return (
    <div className={style.options}>
      <p
        onClick={() => {
          setEditorShown(true);
        }}
      >
        Edit course
      </p>
      <p
        className={style.delete}
        onClick={() => {
          setPublishedCourses((prevCourses) =>
            prevCourses.filter((course) => course._id !== _id)
          );

          let body = JSON.stringify({ course_id: _id });
          fetch(`${apiUrl}/delete-course`, {
            headers: {
              Authorization: `Bearer ${token()}`,
            },
            method: "POST",
            body,
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }}
      >
        Delete
      </p>
    </div>
  );
}

export default Options;
