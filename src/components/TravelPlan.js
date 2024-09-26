import { useState } from 'react';
import '../styles/Sub.css';

function TravelPlan() {
    const [date, setDate] = useState('');
    const [plan, setPlan] = useState('');
    const [plans, setPlans] = useState([]); // 여러 계획을 저장하는 상태

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlan = { date, plan };
        setPlans([...plans, newPlan]); // 기존 계획 목록에 새 계획 추가
        setDate(''); // 입력란 초기화
        setPlan('');
    };
    
    return (
        <div id='wrap'>
            <h1>여행 계획 작성</h1>
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                    className="input"
                />
                <textarea 
                    placeholder="여행 계획을 입력하세요..." 
                    rows="5" 
                    cols="50" 
                    value={plan} 
                    onChange={(e) => setPlan(e.target.value)} 
                    required 
                    className="textarea"
                ></textarea>
                <button type="submit" className="submit-btn">작성완료</button>
            </form>

            {/* 작성한 계획을 표시하는 테이블 */}
            <h2>작성된 여행 계획</h2>
            {plans.length > 0 ? (
                <table className="plans-table">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>계획</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.plan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>아직 계획이 없습니다.</p>
            )}
        </div>
    );
}

export default TravelPlan;