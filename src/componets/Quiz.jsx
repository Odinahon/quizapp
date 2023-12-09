import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

import Summary from "./Summary.jsx";

export default function Quiz() {
  //TODO
  //output the question
  //store the user's answer
  //switch to the next question
  //to do that I need to manage some states
  //register currently active questions one of it
  //write it down what you would like to return in the current component
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); //we are managing specific question by its index in the array where we are going to store them
  const [userAnswers, setUserAnswers] = useState([]);

  //another way of deriving an active question is by looking at answers length
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; //when we are done answering all the questions, that means we have all the answers

  // const handleSelectAnswer = useCallback(function handleSelectAnswer(
  //   selectedAnswer
  // ) {
  //   setUserAnswers((prevUserAnswers) => {
  //     return [...prevUserAnswers, selectedAnswer];
  //   });
  // },
  // []);

  // const handleSkipAnswer = useCallback(() => {
  //   handleSelectAnswer(null);
  // }, handleSelectAnswer);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}></Summary>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
