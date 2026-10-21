import formatTime from "../../utils/formatTime";
import "./QuestionHeader.css";

const QuestionHeader = ({ currentQuestion, totalQuestions, timeLeft }) => {
  return (
    <div className="question-header-container">
      <h2>
        Question {currentQuestion + 1} out of {totalQuestions}
      </h2>
      <div className="time-container">
        Time left: {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default QuestionHeader;