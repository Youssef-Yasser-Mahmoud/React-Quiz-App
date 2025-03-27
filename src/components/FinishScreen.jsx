function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 0) emoji = '😒';
  if (percentage > 0 && percentage < 50) emoji = '🥲';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 80 && percentage < 100) emoji = '😀';
  if (percentage === 100) emoji = '🥇';

  return (
    <>
      <p className='result'>
        {emoji} You scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Your highest score was: {highScore} points)</p>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'restart' })}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
