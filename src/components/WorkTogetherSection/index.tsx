import { useNavigate } from 'react-router-dom';
import { WorkTogetherSectionContainer, WorkTogetherText } from './style';

const WorkTogetherSection = () => {
    const navigate = useNavigate();

    return (
        <WorkTogetherSectionContainer>
            <WorkTogetherText onClick={() => navigate('/contact')}>
                Vamos trab
                <span>
                    alhar juntos
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </WorkTogetherText>
        </WorkTogetherSectionContainer>
    );
};

export default WorkTogetherSection;
