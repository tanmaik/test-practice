"use client";

const QuestionBox = ({ question, submitAnswer }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target[1].checked) {
      submitAnswer("A");
    } else if (event.target[2].checked) {
      submitAnswer("B");
    } else if (event.target[3].checked) {
      submitAnswer("C");
    } else if (event.target[4].checked) {
      submitAnswer("D");
    }
  };

  return (
    <div className="border-1 px-3 py-6 w-[30rem] ">
      <h1 className="text-lg font-medium">
        {question.question_number}. {question.question}
      </h1>
      <form onSubmit={submitHandler}>
        <fieldset>
          {question.choices.map((choice) => (
            <div className="mt-1">
              <input
                type="radio"
                defaultChecked={false}
                name={question.question}
                id={choice}
              />
              <label for={choice} className="ml-2">
                {choice}
              </label>
            </div>
          ))}
        </fieldset>
        <button
          type="submit"
          className="px-2 py-1 rounded-sm bg-black text-white mt-4"
        >
          Next question
        </button>
      </form>
    </div>
  );
};

export default QuestionBox;
