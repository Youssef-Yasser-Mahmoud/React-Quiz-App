function NextButton({ answer, dispatch }) {
  if (answer === null) {
    return;
  }
  return (
    <button className='btn btn-ui' onClick={() => dispatch({ type: 'nextButton' })}>
      Next
    </button>
  );
}

export default NextButton;
