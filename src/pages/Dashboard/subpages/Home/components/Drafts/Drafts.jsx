import React from "react";
import style from "./index.module.css";
import Draft from "../Draft/Draft";

function Drafts({ setEditorShown, drafts }) {
  return (
    <section className={style.grid}>
      {drafts.map((draft) => (
        <Draft key={draft._id} draft={draft} setEditorShown={setEditorShown} />
      ))}
    </section>
  );
}

export default Drafts;
