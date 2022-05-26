import React from "react";
import style from "./index.module.css";
import { constants } from "../../../../../../constants";

function Options({
  setEditorShown,
  setPublishedCourses,
  _id,
  setCourseToShow,
  course,
}) {
  const { apiUrl, token } = constants;

  return (
    <div className={style.options}>
      <p
        onClick={() => {
          let HTMLValue = "";
          course.sections.forEach((section) => {
            HTMLValue += `<h1>${section.title}</h1>${section.content}`;
          });
          HTMLValue = HTMLValue.replaceAll("\n", "<br />");
          setCourseToShow({ ...course, HTMLValue });
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
          });
        }}
      >
        Delete
      </p>
    </div>
  );
}

export default Options;
