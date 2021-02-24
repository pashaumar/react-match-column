import React, { useState, useEffect } from "react";
import styles from "./Question.module.css";
import { getQuestionData } from "../../utils/getDummyData";
import { getDelay } from "../../utils/delay";
import ColumnOne from "../columnOne/ColumnOne";
import ColumnTwo from "../columnTwo/ColumnTwo";
function Question({
  leftColumnItems,
  rightColumnItems,
  questionItemLength,
  fetchingAnswer,
  setFetchingAnswer,
}) {
  const initialDndState = {
    draggedFrom: [],
    draggedTo: [],
    draggedFromData: [],
    draggedToData: [],
  };
  const questionData = JSON.parse(getQuestionData);
  const [dndValues, setDndValues] = useState(initialDndState);
  const [randomDraggedOrder, setRandomDraggedOrder] = useState([]);
  const [myAnswerOrder, setMyAnswerOrder] = useState([]);

  useEffect(() => {
    if (dndValues.draggedFrom.length === questionData.left_column.length) {
      for (let i = 0; i < dndValues.draggedFrom.length; i++) {
        setRandomDraggedOrder((prevOrder) => {
          return [
            ...prevOrder,
            {
              name: dndValues.draggedFromData[i].name,
              index: dndValues.draggedToData[i].draggedToIndex,
            },
          ];
        });
      }
    }
  }, [dndValues]);

  useEffect(() => {
    if (randomDraggedOrder.length === questionData.left_column.length) {
      for (let i = 0; i < questionData.left_column.length; i++) {
        for (let j = 0; j < randomDraggedOrder.length; j++) {
          if (questionData.left_column[i] === randomDraggedOrder[j].name) {
            setMyAnswerOrder((prevOrder) => {
              return [...prevOrder, { ...randomDraggedOrder[j] }];
            });
          }
        }
      }
    }
  }, [randomDraggedOrder]);
  const handleResetClick = () => {
    setDndValues(initialDndState);
    setFetchingAnswer(false);
    setRandomDraggedOrder([]);
    setMyAnswerOrder([]);
  };
  const handleSubmitClick = async () => {
    if (
      dndValues.draggedFrom.length === 0 ||
      dndValues.draggedTo.length === 0
    ) {
      return;
    }
    if (dndValues.draggedFrom.length !== questionItemLength) {
      return;
    }
    await getDelay(500);
    setFetchingAnswer(true);
  };
  return (
    <div className={styles.questionContainer}>
      <ColumnOne
        leftColumnItems={leftColumnItems}
        dndValues={dndValues}
        setDndValues={setDndValues}
      />
      <ColumnTwo
        rightColumnItems={rightColumnItems}
        dndValues={dndValues}
        setDndValues={setDndValues}
        fetchingAnswer={fetchingAnswer}
        myAnswerOrder={myAnswerOrder}
      />
      <div className={styles.buttonContainer}>
        <button onClick={handleResetClick}>reset</button>
        <button onClick={handleSubmitClick}>submit</button>
      </div>
    </div>
  );
}

export default Question;
