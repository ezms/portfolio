import AboutSection from '../../components/AboutSection';
import PresentationSection from '../../components/PresentationSection';
import { HomePageContainer } from './style';

const Home = () => {
    return (
        <HomePageContainer>
            <PresentationSection />
            <AboutSection />
        </HomePageContainer>
    );
};

export default Home;
