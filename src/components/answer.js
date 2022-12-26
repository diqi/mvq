import React from 'react';
import cn from 'classnames';

export default function Anwsers({ answers, setGoNext }) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [comfirmedAnswer, setComfirmedAnswer] = React.useState(null);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const confirmAnswer = () => {
    setComfirmedAnswer(selectedAnswer);
    setGoNext(selectedAnswer);
  };

  return (
    <>
      {!!comfirmedAnswer ? (
        <div>
          <button
            type="button"
            className={cn('button', { 'bg-yellow': comfirmedAnswer.isCorrect })}
          >
            {comfirmedAnswer.t}
          </button>
          <div className="answer-text">{comfirmedAnswer.a}</div>
        </div>
      ) : (
        <>
          <li>
            {answers.map((answer) => (
              <button
                type="button"
                key={answer.id}
                className={cn('button', {
                  selected: selectedAnswer?.id === answer.id,
                })}
                onClick={() => selectAnswer(answer)}
              >
                {answer.t}
              </button>
            ))}
          </li>
          {selectedAnswer && (
            <button className="button small bg-yellow" onClick={confirmAnswer}>
              Узнать
            </button>
          )}
        </>
      )}
    </>
  );
}
