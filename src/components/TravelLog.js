import { Link } from 'react-router-dom';

function TravelLog() {
  return (
    <div id='wrap'>
      <h1>여행 기록 작성</h1>
      <textarea placeholder="여행 기록을 입력하세요..." rows="10" cols="50"></textarea>
      <br />
      <Link to="/travel-plan">여행 계획 페이지로 이동</Link>
    </div>
  );
}

export default TravelLog;