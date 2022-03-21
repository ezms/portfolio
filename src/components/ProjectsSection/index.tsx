import {
    Project,
    ProjectList,
    ProjectsSectionContainer,
    ProjectsTitle,
    ToPortfolioPage,
} from './style';
import { myProjectList } from '../../shared/projects';
import ProjectCard from '../ProjectCard';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
    const navigate = useNavigate();

    return (
        <ProjectsSectionContainer>
            <ProjectsTitle>Projetos em Destaque</ProjectsTitle>
            <ProjectList>
                {myProjectList.map((project, index) => (
                    <Project key={index}>
                        <ProjectCard
                            thumbnailURL={project.thumbnail}
                            projectName={project.project}
                            tags={project.techs}
                            url={project.link}
                            repository={project.repo}
                        />
                    </Project>
                ))}
            </ProjectList>
            <ToPortfolioPage onClick={() => navigate('/projects')}>
                Ver Mais...
            </ToPortfolioPage>
        </ProjectsSectionContainer>
    );
};

export default ProjectsSection;
