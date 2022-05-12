import React from "react";

function Image({ contentState, block }) {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src } = entity.getData();

  return <img src={src} alt="image" />;
}

export default Image;
