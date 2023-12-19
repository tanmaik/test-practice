// npm run dev

"use client";

import questions from "@/utils/questions";
import QuestionBox from "./components/QuestionBox";
import { useState } from "react";
import answers from "@/utils/answers";
export default function Home() {
  let startingQuestion = 1;
  startingQuestion = startingQuestion - 1;
  let endingQuestion = 100;

  const [currentAnswers, setCurrentAnswers] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(startingQuestion);
  const nextQuestionHandler = (answer) => {
    setCurrentAnswers(currentAnswers + answer);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentAnswers.length >= endingQuestion - startingQuestion) {
    let counter = 0;
    let total = currentAnswers.length;
    console.log(answers.substring(startingQuestion, endingQuestion).length);
    console.log(answers.substring(startingQuestion, endingQuestion));
    console.log("these are my answers" + currentAnswers);

    if (
      currentAnswers.length !==
      answers.substring(startingQuestion, endingQuestion).length
    ) {
      return <div>There is an error.</div>;
    }

    for (let i = 0; i < currentAnswers.length; i++) {
      if (
        currentAnswers[i] ===
        answers.substring(startingQuestion, endingQuestion)[i]
      ) {
        counter += 1;
      }
    }

    return (
      <div className="flex justify-center text-center items-center h-screen">
        <div>
          <h1 className="text-xl">You are done with a score of:</h1>
          <p className="text-4xl mt-4">
            {counter}/{total}, {(counter / total) * 100}%
          </p>
          <button
            className="px-2 py-1 rounded-sm bg-black text-white mt-4"
            onClick={() => {
              setCurrentAnswers("");
              setCurrentQuestion(startingQuestion);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <QuestionBox
          question={questions[currentQuestion]}
          submitAnswer={nextQuestionHandler}
        />
        <div>Your answers so far are: {currentAnswers}</div>
      </div>
    </div>
  );
}
