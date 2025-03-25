import { useReducer } from 'react';

function reducer(prevState, action) {
  switch (action.type) {
    case 'inc':
      return { ...prevState, count: prevState.count + prevState.step };
    case 'dec':
      return { ...prevState, count: prevState.count - prevState.step };
    case 'setCount':
      return { ...prevState, count: action.payLoad };
    case 'setStep':
      return { ...prevState, step: action.payLoad };
    case 'reset':
      return { count: 0, step: 1 };
  }
}

function DateCounter() {
  const [state, disPatch] = useReducer(reducer, { count: 0, step: 1 });
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    disPatch({ type: 'dec' });
  };

  const inc = function () {
    disPatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    disPatch({ type: 'setCount', payLoad: Number(e.target.value) });
  };

  const defineStep = function (e) {
    disPatch({ type: 'setStep', payLoad: Number(e.target.value) });
  };

  const reset = function () {
    disPatch({ type: 'reset' });
  };

  return (
    <div className='counter'>
      <div>
        <input type='range' min='0' max='10' value={step} onChange={defineStep} />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
