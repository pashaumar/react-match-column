import React, { useState } from "react";
import ColumnTwoItem from "../columnItems/ColumnTwoItem";
import { getCorrectAnswer } from "../../utils/getDummyData";
function ColumnTwo({
  rightColumnItems,
  dndValues,
  setDndValues,
  fetchingAnswer,
  myAnswerOrder,
}) {
  const [potentialAnswersIndex, setPotentialAnswersIndex] = useState({});
  const correctAnswer = JSON.parse(getCorrectAnswer);
  const showColumnTwoItems = () => {
    return rightColumnItems.map((item, index) => {
      let resultColor;
      if (
        myAnswerOrder.length === correctAnswer.correctAnsInd.length &&
        fetchingAnswer
      ) {
        if (myAnswerOrder[index].index === correctAnswer.correctAnsInd[index]) {
          resultColor = { backgroundColor: "rgba(46, 213, 115,1.0)" };
        } else {
          resultColor = { backgroundColor: "rgba(255, 99, 72,1.0)" };
        }
      }

      return (
        <ColumnTwoItem
          item={item}
          index={index}
          key={item.choice}
          dndValues={dndValues}
          setDndValues={setDndValues}
          fetchingAnswer={fetchingAnswer}
          resultColor={resultColor}
          myAnswerOrder={myAnswerOrder}
          columnOneIndex={showColumnOneIndex(item.choice)}
        />
      );
    });
  };
  const showColumnOneIndex = (name) => {
    if (dndValues.draggedFromData.length > 0) {
      if (
        dndValues.draggedToData[dndValues.draggedToData.length - 1].name ===
        name
      ) {
        return (
          dndValues.draggedFromData[dndValues.draggedFromData.length - 1]
            .draggedFromIndex + 1
        );
      }
    }
  };
  return (
    <div>
      <div>{fetchingAnswer ? "Your Answer" : "Column 2"}</div>
      <div>{showColumnTwoItems()}</div>
    </div>
  );
}

export default ColumnTwo;
