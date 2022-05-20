import React from "react";
import style from "./index.module.css";
import PublishedCourse from "../PublishedCourse/PublishedCourse";

function PublishedCourses({
  setEditorShown,
  publishedCourses,
  setPublishedCourses,
}) {
  return (
    <section className={style.grid}>
      {publishedCourses.map((publishedCourse) => (
        <PublishedCourse
          key={publishedCourse._id}
          publishedCourse={publishedCourse}
          setEditorShown={setEditorShown}
          setPublishedCourses={setPublishedCourses}
        />
      ))}
    </section>
  );
}

export default PublishedCourses;
