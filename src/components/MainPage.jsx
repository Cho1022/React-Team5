import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';  

function MainPage() {
  const date = new Date().toLocaleDateString();
  const navigate = useNavigate(); 

  const handleNextClick = () => {
    navigate('/next-page'); 
  };

  return (
    <div className="quiz-page">  
      <header>
        <h1>인지 중재 치료</h1>
        <p>{date}</p>
        <p>날씨 정보는 여기에 표시됩니다.</p> {/* 날씨 데이터는 직접 입력 */}
      </header>
      <main>
        <p>
          <div className= "maintext-box">
          승희 씨는 여고 동창들과 <u>11시 30분에 강남역</u>에서 점심을 먹기로 하였습니다.<br />
          약속 장소에서 메뉴를 고르던 친구들의 의견은 나뉘었습니다.<br />
          승희 씨는 “설렁탕이요”, 명자 씨와 미자 씨는 “삼계탕이 먹고 싶다”고 하였습니다.<br />
          그리고 인순 씨는 “다수의 의견에 따르겠네”라고 말하였습니다.<br />
          그러하여 점심메뉴는 “삼계탕”으로 정해졌습니다.<br />
          <u>12시에</u> “한남우 합창실”에 도착하여 4인분을 주문하여 맛있게 먹었습니다.<br />
          삼계탕은 1인분에 12,000원씩 하였는데 계산은 의견을 낸 명자 씨가 하였습니다.<br />
          점심을 먹고 난 후에는 커피를 마시며 향찬식과 옛 추억에 대해 이야기하였습니다.<br />
          친구들과 헤어진 승희 씨는 노래교실에 참여하기 위해 <u>2시 25분에</u> “행복 복지관”으로 갔습니다.<br />
          노래 교실이 끝난 후 식당에 들러 저녁식사를 위한 불고기 재료를 구입하고 집으로 돌아왔습니다.
          </div>
        </p>

        <div><button className="start-button" onClick={() => navigate('/quiz')}>퀴즈 시작</button></div>
      
      </main>
    </div>
  );
}

export default MainPage;
