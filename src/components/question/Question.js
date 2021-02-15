import React, { useState, useRef, useEffect } from "react";
import styles from "./Question.module.css";
function Question({ questionData }) {
  const showColumnOne = () => {
    if (questionData === null) {
      return;
    }
    return questionData.left_column.map((item, index) => (
      <div
        key={index + 1}
        onDragStart={dragStart}
        draggable="true"
        onDragEnd={dragEnd}
      >
        {item}
      </div>
    ));
  };
  const showColumnTwo = () => {
    if (questionData === null) {
      return;
    }
    return questionData.right_column.map((item, index) => (
      <div key={index + 1} onDragOver={dragOver} onDrop={drop}>
        {item.choice}
      </div>
    ));
  };
  const dragStart = (event) => {
    console.log(event.target.innerHTML);
  };
  const dragOver = (event) => {
    event.preventDefault();
  };
  const drop = (event) => {
    console.log(event.target.innerHTML);
  };
  const dragEnd = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
  };
  return (
    <div className={styles.questionContainer}>
      <div className={styles.columnOneContainer}>
        <div>Column 1</div>
        {showColumnOne()}
      </div>
      <div className={styles.columnTwoContainer}>
        <div>Column 2</div>
        {showColumnTwo()}
      </div>
    </div>
  );
}

export default Question;
