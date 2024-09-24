import { Link } from 'react-router-dom';

function TravelPlan() {
  return (
    <div id='wrap'>
      <h1>여행 계획 작성</h1>
      <textarea placeholder="여행 계획을 입력하세요..." rows="10" cols="50"></textarea>
      <br />
      <Link to="/travel-log">여행 기록 페이지로 이동</Link>
    </div>
  );
}

export default TravelPlan;