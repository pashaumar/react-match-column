import React from "react";
import styles from "./ColumnItems.module.css";
function ColumnOneItem({ item, index, dndValues, setDndValues }) {
  const dragStart = (event) => {};
  const dragEnd = (event) => {
    event.preventDefault();
    setDndValues((prevValues) => {
      return {
        ...prevValues,
        draggedFrom: [...prevValues.draggedFrom, event.target.innerHTML],
        draggedFromData: [
          ...prevValues.draggedFromData,
          { name: event.target.innerHTML, draggedFromIndex: index },
        ],
      };
    });
  };
  const itemDragEndStyle = (name) => {
    if (dndValues.draggedFrom === [] || dndValues.draggedTo === []) {
      return;
    }
    if (dndValues.draggedFrom.length > dndValues.draggedTo.length) {
      dndValues.draggedFrom.pop();
      dndValues.draggedFromData.pop();
    }
    if (dndValues.draggedFrom.length === dndValues.draggedTo.length) {
      if (dndValues.draggedFrom.filter((item) => item === name)[0] === name) {
        return {
          opacity: "0.5",
          pointerEvents: "none",
        };
      }
    }
  };
  return (
    <div
      className={styles.columnOneItem}
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      style={itemDragEndStyle(item.name)}
    >
      {item.name}
    </div>
  );
}

export default ColumnOneItem;
