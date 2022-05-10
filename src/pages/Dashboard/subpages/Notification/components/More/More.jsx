import React, { useState } from "react";
import { Ellipsis } from "../../../../../../components";
import Options from "../Options/Options";
import style from "./index.module.css";

function More({ functions }) {
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  return (
    <div
      className={style.more}
      tabIndex={1}
      onFocus={() => {
        setOptionsAreShown(true);
      }}
      onBlur={() => {
        setOptionsAreShown(false);
      }}
    >
      <Ellipsis />
      {optionsAreShown && <Options functions={functions} />}
    </div>
  );
}

export default More;
