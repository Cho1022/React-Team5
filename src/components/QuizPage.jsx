import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClockComponent from './ClockComponent';
import Swal from 'sweetalert2';

function QuizPage() {
  const [answers, setAnswers] = useState({
    time1: { hours: 0, minutes: 0 },
    time2: { hours: 0, minutes: 0 },
    time3: { hours: 0, minutes: 0 },
  });
  const navigate = useNavigate();

  const handleTimeSelect = (index, h, m) => {
    const newAnswers = { ...answers };
    newAnswers[`time${index}`] = { hours: h, minutes: m };
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = {
      time1: { hours: 11, minutes: 30 },
      time2: { hours: 12, minutes: 0 },
      time3: { hours: 2, minutes: 25 },
    };

    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (
        answers[key].hours === correctAnswers[key].hours &&
        answers[key].minutes === correctAnswers[key].minutes
      ) {
        correctCount += 1;
      }
    });

    let message = '';
    if (correctCount === 1) {
      message = '1문제 정답입니다.';
    } else if (correctCount === 2) {
      message = '2문제 정답입니다.';
    } else if (correctCount === 3) {
      message = '모두 맞히셨습니다.';
    } else {
      message = '오답입니다.';
    }

    Swal.fire({
      title: 'Alert가 실행되었습니다.',
      text: message,
      icon: correctCount === 3 ? 'success' : 'error',
    });
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  return (
    <div className="quiz-page">
      <header>
        <h1>인지 중재 치료</h1>
      </header>
      <main>
        <div className="question-container">
          <div className="question">
            <ClockComponent
              index={1}
              hours={answers.time1.hours}
              minutes={answers.time1.minutes}
              onTimeSelect={handleTimeSelect}
            />
            <p>
              승희는 외출을 준비하고{' '}
              <input
                type="text"
                value={`${answers.time1.hours}시`}
                readOnly
              />
              시{' '}
              <input
                type="text"
                value={`${answers.time1.minutes}분`}
                readOnly
              />
              분 친구들과 점심약속을 위해 강남역에 갔습니다.
            </p>
          </div>
          <div className="question">
            <ClockComponent
              index={2}
              hours={answers.time2.hours}
              minutes={answers.time2.minutes}
              onTimeSelect={handleTimeSelect}
            />
            <p>
              또 다른 문제 설명 여기에 추가
              <input
                type="text"
                value={`${answers.time2.hours}시`}
                readOnly
              />
              시{' '}
              <input
                type="text"
                value={`${answers.time2.minutes}분`}
                readOnly
              />
              분
            </p>
          </div>
          <div className="question">
            <ClockComponent
              index={3}
              hours={answers.time3.hours}
              minutes={answers.time3.minutes}
              onTimeSelect={handleTimeSelect}
            />
            <p>
              또 다른 문제 설명 여기에 추가
              <input
                type="text"
                value={`${answers.time3.hours}시`}
                readOnly
              />
              시{' '}
              <input
                type="text"
                value={`${answers.time3.minutes}분`}
                readOnly
              />
              분
            </p>
          </div>
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>
            정답 확인
          </button>
          <button className="previous-button" onClick={handlePrevious}>
            이전으로
          </button>
        </div>
      </main>
    </div>
  );
}

export default QuizPage;
