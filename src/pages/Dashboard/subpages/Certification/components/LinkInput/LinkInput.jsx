import React from "react";
import style from "./index.module.css";
import { Input } from "../../../../../../components";

function LinkInput() {
  return (
    <form className={style.form}>
      <label htmlFor="template-url">Template URL</label>
      <fieldset>
        <Input
          placeholder={"docs.google.com..."}
          type={"text"}
          name={"template-url"}
          id={"template-url"}
        />
        <button>Submit</button>
      </fieldset>
    </form>
  );
}

export default LinkInput;
