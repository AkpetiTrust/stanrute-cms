import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import Draft from "../Draft/Draft";
import { constants } from "../../../../../../constants";

function Drafts({ setEditorShown }) {
  const [drafts, setDrafts] = useState([
    {
      title: "What is OTC?",
      id: 1,
    },
    {
      title: "Crypto terminologies",
      id: 2,
    },
  ]);

  const { apiUrl, token } = constants;

  useEffect(() => {
    fetch(`${apiUrl}/drafts`, {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <section className={style.grid}>
      {drafts.map((draft) => (
        <Draft
          key={draft.id}
          title={draft.title}
          setEditorShown={setEditorShown}
        />
      ))}
    </section>
  );
}

export default Drafts;
