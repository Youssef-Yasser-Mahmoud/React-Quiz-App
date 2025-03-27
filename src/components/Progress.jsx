function Progress({ numOfQuestions, index, maxPossiblePoints, points, answer }) {
  return (
    <header className='progress'>
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1} / {numOfQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
