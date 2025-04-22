// pages/KnowledgeHorror.jsx
import { useLocation } from 'react-router-dom';

function KnowledgeHorror() {
    const { state } = useLocation();
    const type = state?.type || 'knowledge';

    return (
        <div>
            <h1>{type === 'horror' ? '괴담' : ' 상식'}</h1>
            {type === 'horror' ? (
                <p>괴담 관련 설명</p>
            ) : (
                <p> 상식 관련 </p>
            )}
        </div>
    );
}

export default KnowledgeHorror;