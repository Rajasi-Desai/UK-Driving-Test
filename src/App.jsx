import { useReducer } from 'react';
import './App.css';
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import QuestionView from './components/Questions/QuestionView';
import ProgressBar from './components/ProgressBar';
import AppBanner from './components/AppBanner';
import ResultView from './components/Results/ResultView';

const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeLeft: 57 * 60,
};

const App = () => {
  const [state, dispatch] = useReducer(
    ((state, action) => quizReducer(state, action, questions.length)),
    initialState
  );

  const q = questions[state.currentQuestion];

  const handleAnswer = (index) => {
    dispatch({ type: "ANSWER", payload: index})
  };

  const questionView = (
    <QuestionView
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      timeLeft={state.timeLeft}
      onAnswer={handleAnswer}
      dispatch={dispatch}
    />
  );

  const score = state.answers.reduce((acc, answer, idx) => {
    return (answer === questions[idx].correctAnswer) ? acc + 1 : acc;
  }, 0);

  const resultView = (
    <ResultView 
      score={score}
      questions={questions}
      answers={state.answers}
    />
  );

  return (
    <div className='app-container'>
      <ProgressBar 
        current={state.currentQuestion}
        total={questions.length}
      />
      
      <AppBanner />

      <div className='quiz-content'>
        {state.submitted ? resultView : questionView}
      </div>
    </div>
  );
};

export default App
