import React from "react";
import styles from "./ColumnItem.module.css";
function ColumnTwoItem({ item }) {
  const updateDragAndDropState = (event) => {
    event.preventDefault();
    console.log("event.target.innerHTML");
  };
  const receiveDraggedElements = (event) => {
    event.preventDefault();
    console.log("event.target.innerHTML");
  };
  return (
    <div
      className={styles.columnTwo}
      onDrop={updateDragAndDropState}
      onDragOver={receiveDraggedElements}
    >
      {item.choice}
    </div>
  );
}

export default ColumnTwoItem;
