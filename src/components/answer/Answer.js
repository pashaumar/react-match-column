import React from "react";
import styles from "./Answer.module.css";
import { getCorrectAnswer } from "../../utils/getDummyData";
import { getQuestionData } from "../../utils/getDummyData";
function Answer({ leftColumnItems }) {
  const questionData = JSON.parse(getQuestionData);
  const answerData = JSON.parse(getCorrectAnswer);
  const showAnswerItems = () => {
    return answerData.correctAnsInd.map((item, index) => (
      <div key={index} className={styles.answerItem}>
        {questionData.left_column[item]}
      </div>
    ));
  };
  return (
    <div className={styles.answerContainer}>
      <div>Correct Answer</div>
      {showAnswerItems()}
    </div>
  );
}

export default Answer;
