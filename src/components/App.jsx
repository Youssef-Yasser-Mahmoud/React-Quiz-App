import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'active':
      return { ...state, status: 'active' };
    case 'newAnswer': {
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    }
    case 'nextButton':
      return { ...state, index: state.index + 1, answer: null };
    case 'finished':
      return { ...state, status: 'finish', highScore: state.highScore > state.points ? state.highScore : state.points };
    default:
      throw new Error('Data Unknown');
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highScore }, dispatch] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((error) => dispatch({ type: 'dataFailed', payload: error }));
  }, []);

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress
              numOfQuestions={numOfQuestions}
              index={index}
              maxPossiblePoints={maxPossiblePoints}
              points={points}
              answer={answer}
            />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <NextButton answer={answer} dispatch={dispatch} numOfQuestions={numOfQuestions} index={index} />
          </>
        )}
        {status === 'finish' && (
          <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highScore={highScore} />
        )}
      </Main>
    </div>
  );
}
