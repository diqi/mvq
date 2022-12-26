import React from 'react';
import Anwsers from './answer';

export default function Question({ question, goNext }) {
  const [answer, setAnswer] = React.useState(null);
  const [isAnswered, setIsAnswered] = React.useState(false);

  const setGoNext = (answer) => {
    setAnswer(answer);
    setIsAnswered(true);
  };

  return (
    <div className="flex">
      <div className="count">{question.id} / 10</div>
      <img src={question.i} alt={question.id} />

      <Anwsers answers={question.v} setGoNext={setGoNext} />

      {isAnswered && (
        <button className="button small" onClick={() => goNext(answer)}>
          Дальше
        </button>
      )}
    </div>
  );
}
