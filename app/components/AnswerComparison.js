const AnswerComparison = ({ realAnswers, ourAnswers, startingQuestion }) => {
  return (
    <div className="mt-10 text-xl flex justify-center">
      <table className="">
        <tr>
          {realAnswers.split("").map((answer, index) => (
            <td key={index} className="border-2 border-black font-bold px-2">
              {index + startingQuestion + 1}
            </td>
          ))}
        </tr>
        <tr>
          {realAnswers.split("").map((answer, index) => (
            <td key={index} className={`border-2 border-gray-300 px-2`}>
              {answer}
            </td>
          ))}
        </tr>
        <tr>
          {ourAnswers.split("").map((answer, index) => (
            <td
              key={index}
              className={`border-2 border-gray-300 px-2 font-medium ${
                ourAnswers[index] === realAnswers[index]
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {answer}
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default AnswerComparison;
