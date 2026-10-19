import Card from "./ui/Card";
import QuestionHeader from "./QuestionHeader";

const QuestionView = ({ q, currentQuestion, totalQuestions, selectedAnswer, onAnswer, timeLeft, dispatch }) => {
    return (
        <>
        <Card>
            <QuestionHeader
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
                timeLeft={timeLeft}
            />
        </Card>
        </>
    );
};

export default QuestionView;