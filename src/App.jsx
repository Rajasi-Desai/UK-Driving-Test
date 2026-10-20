import { useReducer } from 'react';
import './App.css';
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import TempComponent from './components/tempComponent';
import QuestionView from './components/QuestionView';
import ProgressBar from './components/ProgressBar';
import AppBanner from './components/AppBanner';

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

  const resultView = (<></>);

  return (
    <div className='app-container'>
      <TempComponent state={state} dispatch={dispatch}/>

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
