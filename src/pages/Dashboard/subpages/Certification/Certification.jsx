import React, { useState } from "react";
import { CategoryBar } from "../../../../components";
import { FileInput, LinkInput } from "./components";
import style from "./index.module.css";

function Certificate() {
  const [linkInputIsShown, setLinkInputIsShown] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setLinkInputIsShown(true);
  };

  return (
    <div>
      <CategoryBar />
      <div className={style.inner}>
        <FileInput onClick={onClick} />
        {linkInputIsShown && <LinkInput />}
        <p
          className={`${style.instruction} ${linkInputIsShown && style.active}`}
        >
          Upload certificate template (Max. 2MB)
        </p>
      </div>
    </div>
  );
}

export default Certificate;
