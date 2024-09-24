import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './images/baseball.png';
import './styles/Reset.css';
import './styles/App.css';
import Travel from './components/Travel'; // 계획
import TravelPlan from './components/TravelPlan'; // 계획
import TravelLog from './components/TravelLog'; // 여행 기록

function Home() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>24년09월25일(수) ~ 24년10월06일(일)</p>
      <p>JH 여행 계획 및 여정!</p>
      <Link
        className="App-link"
        to="/travel"
      >
        페이지 이동하기
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/travel" element={<Travel />} />
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/travel-log" element={<TravelLog />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
