import React from "react";
import styles from "./ColumnItems.module.css";
import { getQuestionData } from "../../utils/getDummyData";
function ColumnTwoItem({
  item,
  index,
  dndValues,
  setDndValues,
  fetchingAnswer,
  resultColor,
  myAnswerOrder,
  columnOneIndex,
}) {
  const questionData = JSON.parse(getQuestionData);
  const dragOverItem = (event) => {
    event.preventDefault();
  };
  const dropOnItem = (event, name) => {
    if (dndValues.draggedTo.includes(name)) {
      return;
    }
    setDndValues((prevValues) => {
      return {
        ...prevValues,
        draggedTo: [...prevValues.draggedTo, event.target.innerHTML],
        draggedToData: [
          ...prevValues.draggedToData,
          { name: event.target.innerHTML, draggedToIndex: index },
        ],
      };
    });
  };
  return (
    <div className={styles.columnTwoItemContainer}>
      <div
        className={styles.columnTwoItem}
        onDragOver={dragOverItem}
        onDrop={(event) => dropOnItem(event, item.choice)}
        style={resultColor}
      >
        {fetchingAnswer
          ? questionData.right_column[myAnswerOrder[index].index].choice
          : item.choice}
      </div>
      {!fetchingAnswer && dndValues.draggedFrom.length > 0 && (
        <div className={styles.indexContainer}>{columnOneIndex}</div>
      )}
    </div>
  );
}

export default ColumnTwoItem;
