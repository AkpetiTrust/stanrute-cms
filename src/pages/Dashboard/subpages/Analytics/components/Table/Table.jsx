import React from "react";
import style from "./index.module.css";

function Table({ courseStats }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Course Title</th>
          <th>Course views</th>
          <th>Course graduates</th>
        </tr>
      </thead>
      <tbody>
        {courseStats.map((courseStat, index) => (
          <tr key={index}>
            <td>
              <p>{courseStat.title}</p>
              <p>Published: {courseStat.published}</p>
            </td>
            <td>
              <p>{courseStat.views}</p>
            </td>
            <td>
              <p>{courseStat.graduates}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
