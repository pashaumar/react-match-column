import React from "react";
import styles from "./Question.module.css";
import ColumnOneItem from "../questionColumns/ColumnOneItem";
import ColumnTwoItem from "../questionColumns/ColumnTwoItem";
function Question({ questionData }) {
  const showColumnOne = () => {
    if (questionData === null) {
      return;
    }
    return questionData.left_column.map((item, index) => (
      <ColumnOneItem item={item} key={index + 1} />
    ));
  };
  const showColumnTwo = () => {
    if (questionData === null) {
      return;
    }
    return questionData.right_column.map((item, index) => (
      <ColumnTwoItem item={item} key={index + 1} />
    ));
  };
  return (
    <div className={styles.questionContainer}>
      <div>{showColumnOne()}</div>
      <div>{showColumnTwo()}</div>
    </div>
  );
}

export default Question;
