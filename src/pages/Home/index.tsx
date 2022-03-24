import AboutSection from '../../components/AboutSection';
import AnimateContainer from '../../components/AnimateContainer';
import ContactForm from '../../components/ContactForm';
import ContactMessage from '../../components/ContactMessage';
import Footer from '../../components/Footer';
import MyServicesSection from '../../components/MyServicesSection';
import PresentationSection from '../../components/PresentationSection';
import ProjectsSection from '../../components/ProjectsSection';
import SkillsSection from '../../components/SkillsSection';
import { ContactFormBox, HomePageContainer } from './style';

const Home = () => {
    return (
        <AnimateContainer>
            <HomePageContainer>
                <PresentationSection />
                <AboutSection />
                <MyServicesSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactFormBox>
                    <ContactMessage />
                    <ContactForm />
                </ContactFormBox>
                <Footer />
            </HomePageContainer>
        </AnimateContainer>
    );
};

export default Home;
