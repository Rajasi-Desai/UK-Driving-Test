import Card from "../ui/Card";
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "../MediaDisplay";
import NavigationControls from "../NavigationControls";

const QuestionView = ({ q, currentQuestion, totalQuestions, selectedAnswer, onAnswer, timeLeft, dispatch }) => {
  const hasMedia = q.type === "image" || q.type === "video";

  return (
    <>
    <Card>
      <QuestionHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft}
      />
      <div style={{ display: "flex", gap: "1rem", flexDirection: "row",}}>
        <div style={{ flex: 1 }}>
          <QuestionText text={q.question}/>
          <AnswerOptions 
            options={q.options}
            selectedIndex={selectedAnswer}
            onSelect={onAnswer}
            centered={!hasMedia}
          />
        </div>
        {hasMedia && (
          <MediaDisplay 
            key={q.id}
            type={q.type}
            image={q.image}
            video={q.video}
        />
        )}
      </div>
      <NavigationControls
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        dispatch={dispatch}
      />
    </Card>
    </>
  );
};

export default QuestionView;