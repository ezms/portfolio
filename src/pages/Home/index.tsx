import AboutSection from '../../components/AboutSection';
import MyServicesSection from '../../components/MyServicesSection';
import PresentationSection from '../../components/PresentationSection';
import SkillsSection from '../../components/SkillsSection';
import { HomePageContainer } from './style';

const Home = () => {
    return (
        <HomePageContainer>
            <PresentationSection />
            <AboutSection />
            <MyServicesSection />
            <SkillsSection />
        </HomePageContainer>
    );
};

export default Home;
