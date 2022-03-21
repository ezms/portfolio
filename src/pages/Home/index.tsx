import AboutSection from '../../components/AboutSection';
import MyServicesSection from '../../components/MyServicesSection';
import PresentationSection from '../../components/PresentationSection';
import ProjectsSection from '../../components/ProjectsSection';
import SkillsSection from '../../components/SkillsSection';
import WorkTogetherSection from '../../components/WorkTogetherSection';
import { HomePageContainer } from './style';

const Home = () => {
    return (
        <HomePageContainer>
            <PresentationSection />
            <AboutSection />
            <MyServicesSection />
            <SkillsSection />
            <ProjectsSection />
            <WorkTogetherSection />
        </HomePageContainer>
    );
};

export default Home;
