import { useReducer } from 'react';
import './App.css';
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";

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
  return (
    <div className='app-container'>
      <h2>Driving test app</h2>
      <p>
        <strong>
          Current Question: 
        </strong>
        {state.currentQuestion}
      </p>
      <div style={{ marginBottom: "1rem"}}>
        <button onClick={() => console.log(state)}>
          Log State
        </button>
        <button onClick={() => console.log(state.answers)}>
          Log Answers
        </button>
      </div>
      <div style={{ display: "flex", gap:"0.5rem", flexWrap:"wrap" }}>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 0 })}>
          ANSWER 0
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 1 })}>
          ANSWER 1
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 2 })}>
          ANSWER 2
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 3 })}>
          ANSWER 3
        </button>
        <button onClick={() => dispatch({ type: "NEXT" })}>
          NEXT
        </button>
        <button onClick={() => dispatch({ type: "PREV" })}>
          PREV
        </button>
        <button onClick={() => dispatch({ type: "SUBMIT" })}>
          SUBMIT
        </button>
        <button onClick={() => dispatch({ type: "TICK" })}>
          TICK
        </button>
      </div>
    </div>
  );
};

export default App
