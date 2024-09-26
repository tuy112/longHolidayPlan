import { Link } from 'react-router-dom';
import '../styles/Reset.css';
import '../styles/Sub.css';

function Travel() {
  return (
    <div id='wrap'>
      <h1>여행 기록방</h1>
      <p>아래 버튼을 클릭해주세요.</p>
      <nav>
        <ul>
          <li>
            <Link to="/travel-plan">여행 계획</Link>
          </li>
          <li>
            <Link to="/travel-log">여행 기록</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Travel;