import { Link } from 'react-router-dom';
import '../styles/Reset.css';
import '../styles/Sub.css';

function Travel() {
  return (
    <div id='wrap'>
      <h1>여행 관리 페이지</h1>
      <p>여기서 여행 계획을 작성하거나 여행 기록을 할 수 있습니다.</p>
      <nav>
        <ul>
          <li>
            <Link to="/travel-plan">여행 계획 작성</Link>
          </li>
          <li>
            <Link to="/travel-log">여행 기록 작성</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Travel;