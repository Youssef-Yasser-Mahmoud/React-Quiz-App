function NextButton({ answer, dispatch, index, numOfQuestions }) {
  if (answer === null) {
    return;
  }
  if (index < numOfQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'nextButton' })}>
        Next
      </button>
    );
  }
  if (index === numOfQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'finished' })}>
        Finish
      </button>
    );
  }
}

export default NextButton;
