import formatTime from "../../utils/formatTime";

const QuestionHeader = ({ currentQuestion, totalQuestions, timeLeft }) => {
  return (
    <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem"
    }}
    >
      <h2 style={{fontSize: "1.5rem"}}>
        Question {currentQuestion + 1} out of {totalQuestions}
      </h2>
      <div style={{fontSize: "1.2rem", fontWeight:"bold"}}>
        Time left: {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default QuestionHeader;