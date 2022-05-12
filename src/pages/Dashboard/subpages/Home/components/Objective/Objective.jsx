import React from "react";

function Objective({ objectives, objective, setObjectives, handleClick }) {
  return (
    <input
      type="text"
      value={objective.text}
      autoFocus={objectives[objectives.length - 1].id === objective.id}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleClick();
        }
      }}
      onChange={(e) => {
        let value = e.currentTarget.value;

        if (!value) {
          setObjectives((prevObjectives) =>
            prevObjectives.filter(
              (prevObjective) => prevObjective.id !== objective.id
            )
          );
          return;
        }

        setObjectives((prevObjectives) => {
          let newObjectives = [];
          prevObjectives.forEach((prevObjective) => {
            let newObjective = { ...prevObjective };
            if (newObjective.id === objective.id) {
              newObjective.text = value;
            }

            newObjectives.push(newObjective);
          });

          return newObjectives;
        });
      }}
    />
  );
}

export default Objective;
