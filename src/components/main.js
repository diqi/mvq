import React from 'react';
import Question from './question';

import { QUESTIONS } from '../constants/questions';
import { AppContext } from '../App';

const RESULTS = {
  low: 'Можем вас понять. Нейросеть некоторые вещи понимает очень буквально, а иногда наоборот поражает образностью. Здорово, что несколько пословиц вам удалось вычислить!',
  medium:
    'Добрая половина правильных ответов! Мы угадали бы меньше, честное слово!',
  high: 'Видимо, вы с нейросетями на ты! Или очень хорошо чувствуете русские пословицы. В любом случае результат поразительный и вам положен небольшой подарок — специальный стикер-пак',
};

export default function Main() {
  const { count, updateCount } = React.useContext(AppContext);

  const [isStarted, setIsStarted] = React.useState(false);

  const [questions, setQuestions] = React.useState([...QUESTIONS]);
  const [currentQuestion, setCurrentQuestion] = React.useState(questions[0]);
  const [isEnded, setIsEnded] = React.useState(false);

  const goNext = (answer) => {
    if (answer.isCorrect) {
      updateCount();
    }

    const newQuestions = questions.slice(1);

    if (newQuestions.length === 0) {
      setIsEnded(true);
    }

    setQuestions(newQuestions);
    setCurrentQuestion(newQuestions[0]);
  };

  const _refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      {isStarted ? (
        <>
          {isEnded ? (
            <div className="end">
              <div className="count">{count} / 10</div>
              <div className="end-text">
                {count >= 8
                  ? RESULTS.high
                  : count <= 3
                  ? RESULTS.low
                  : RESULTS.medium}
              </div>

              <button className="button small bg-yellow" onClick={_refreshPage}>
                Еще раз
              </button>
            </div>
          ) : (
            <Question
              question={currentQuestion}
              goNext={goNext}
              key={currentQuestion.id}
            />
          )}
        </>
      ) : (
        <button className="start-btn" onClick={() => setIsStarted(true)}>
          Пройти тест
        </button>
      )}
    </div>
  );
}
