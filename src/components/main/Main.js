import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { getQuestionData } from "../../utils/getDummyData";
import { getDelay } from "../../utils/delay";
import Question from "../question/Question";
function Main() {
  const [questionData, setQuestionData] = useState(null);
  useEffect(() => {
    setData();
  }, []);
  const setData = async () => {
    await getDelay(300);
    setQuestionData(JSON.parse(getQuestionData));
  };
  return (
    <div>
      <Question questionData={questionData} />
    </div>
  );
}

export default Main;
