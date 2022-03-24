import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import PortfolioHeader from '../../components/PortfolioHeader';
import ProjectCard from '../../components/ProjectCard';
import { myProjectList } from '../../shared/projects';
import { BackHomeButton, PortfolioList, PortfolioSection } from './style';
import 'aos/dist/aos.css';
import AnimateContainer from '../../components/AnimateContainer';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <AnimateContainer>
            <PortfolioSection>
                <PortfolioHeader />
                <PortfolioList>
                    {myProjectList.map((project, index) => (
                        <li
                            key={index}
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            <ProjectCard
                                projectName={project.project}
                                repository={project.repo}
                                tags={project.techs}
                                thumbnailURL={project.thumbnail}
                                url={project.link}
                            />
                        </li>
                    ))}
                </PortfolioList>
                <BackHomeButton onClick={() => navigate('/')}>
                    <ion-icon name="caret-back-circle-outline"></ion-icon>
                </BackHomeButton>
                <Footer />
            </PortfolioSection>
        </AnimateContainer>
    );
};

export default Projects;
