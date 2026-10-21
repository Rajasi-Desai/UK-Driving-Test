import "./AnswerFeedback.css";

const AnswerFeedback = ({ options, correctAnswer, userAnswer}) => {
  return (
    <div>
      { options.map((option, index) => {
        const isUserAnswer = userAnswer === index;
        const isCorrectAnswer = correctAnswer === index;
        const isWrongAnswer = isUserAnswer && !isCorrectAnswer;
        return (
          <div 
            key={index}
            className="button-feedback"
            style={{
                backgroundColor: isCorrectAnswer
                ? "#d4edda" 
                : isWrongAnswer
                  ? "#f8d7da" 
                  : "transparent",
              color: isWrongAnswer ? "#721c24" : "inherit",
              border: isUserAnswer ? "1px solid #033735" : "1px solid #ccc",
            }}
          >
            {option}
            {isCorrectAnswer ? "✅" : ""} {" "}
            {isWrongAnswer ? "❌" : ""}
          </div>
        );
      })}
    </div>
  );
};

export default AnswerFeedback;