import React from "react";
import styles from "./ColumnItem.module.css";
function ColumnOneItem({ item }) {
  const startDragging = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
  };
  return (
    <div
      className={styles.columnOne}
      draggable="true"
      onDragStart={startDragging}
    >
      {item}
    </div>
  );
}

export default ColumnOneItem;
