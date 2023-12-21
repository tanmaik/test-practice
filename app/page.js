// npm run dev

"use client";

import questions from "@/utils/questions";
import QuestionBox from "./components/QuestionBox";
import { useState } from "react";
import answers from "@/utils/answers";
import AnswerComparison from "./components/AnswerComparison";
export default function Home() {
  const [startingQuestion, setStartingQuestion] = useState(0);
  const [endingQuestion, setEndingQuestion] = useState(0);
  const [startedTest, setStartedTest] = useState(false);

  const [currentAnswers, setCurrentAnswers] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(startingQuestion);
  const nextQuestionHandler = (answer) => {
    setCurrentAnswers(currentAnswers + answer);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!startedTest) {
    return (
      <div className="flex justify-center text-center items-center h-screen">
        <div>
          <div className="flex gap-2 items-center">
            <label for="starting">Pick your starting question: </label>
            <input
              type="number"
              id="starting"
              className="border-2"
              onChange={(event) => {
                setStartingQuestion(event.target.value);
              }}
              value={startingQuestion}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label for="ending">Pick your ending question: </label>
            <input
              type="number"
              id="ending"
              className="border-2"
              onChange={(event) => {
                setEndingQuestion(event.target.value);
              }}
              value={endingQuestion}
            />
          </div>
          <button
            className="px-2 py-1 rounded-sm bg-black text-white mt-4"
            onClick={() => {
              let sQ = parseInt(startingQuestion);
              if (startingQuestion > 0) {
                setStartingQuestion(sQ - 1);
                setCurrentQuestion(sQ - 1);
              }
              setStartedTest(true);
            }}
          >
            Start the test
          </button>
        </div>
      </div>
    );
  }

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
            {counter}/{total}, {parseInt((counter / total) * 100)}%
          </p>

          <button
            className="px-2 py-1 rounded-sm bg-black text-white mt-4"
            onClick={() => {
              setCurrentAnswers("");
              setStartedTest(false);
              setCurrentQuestion(startingQuestion);
            }}
          >
            Restart
          </button>
          <AnswerComparison
            startingQuestion={startingQuestion}
            realAnswers={answers.substring(startingQuestion, endingQuestion)}
            ourAnswers={currentAnswers}
          />
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
        {currentQuestion !== startingQuestion ? (
          <button
            className="px-2 py-1 rounded-sm bg-black text-white mt-4"
            onClick={() => {
              setCurrentAnswers(
                currentAnswers.substring(0, currentAnswers.length - 1)
              );
              setCurrentQuestion(currentQuestion - 1);
            }}
          >
            Previous
          </button>
        ) : (
          <></>
        )}
        <div>Your answers so far are: {currentAnswers}</div>
      </div>
    </div>
  );
}
