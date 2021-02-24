import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { getQuestionData } from "../../utils/getDummyData";
import { getDelay } from "../../utils/delay";
import Question from "../question/Question";
import Answer from "../answer/Answer";
function Main() {
  const [leftColumnItems, setLeftColumnItems] = useState([]);
  const [rightColumnItems, setRightColumnItems] = useState([]);
  const [questionItemLength, setQuestionItemLength] = useState(0);
  const [fetchingAnswer, setFetchingAnswer] = useState(false);
  useEffect(() => {
    setData();
  }, []);
  const showQuestion = () => {
    if (leftColumnItems.length === 0) {
      return <p>Question Loading ...</p>;
    }
    return (
      <Question
        leftColumnItems={leftColumnItems}
        rightColumnItems={rightColumnItems}
        questionItemLength={questionItemLength}
        fetchingAnswer={fetchingAnswer}
        setFetchingAnswer={setFetchingAnswer}
      />
    );
  };
  const showAnswer = () => {
    if (fetchingAnswer) {
      return <Answer leftColumnItems={leftColumnItems} />;
    }
  };
  const setData = async () => {
    await getDelay(500);
    setLeftColumnItems(
      JSON.parse(getQuestionData).left_column.map((item, index) => {
        return {
          name: item,
          position: index + 1,
        };
      })
    );
    setRightColumnItems(
      JSON.parse(getQuestionData).right_column.map((item, index) => {
        return {
          ...item,
          potentialAnswer: 1,
        };
      })
    );
    setQuestionItemLength(JSON.parse(getQuestionData).right_column.length);
  };
  return (
    <div className={styles.main}>
      {showQuestion()}
      {showAnswer()}
    </div>
  );
}

export default Main;
