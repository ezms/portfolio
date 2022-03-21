import {
    Project,
    ProjectCard,
    ProjectList,
    ProjectsSectionContainer,
    ProjectsTitle,
    ProjectTitle,
} from './style';
import { myProjectList } from '../../shared/projects';

const ProjectsSection = () => {
    return (
        <ProjectsSectionContainer>
            <ProjectsTitle>Projetos em Destaque</ProjectsTitle>
            <ProjectList>
                {myProjectList.map((project, index) => (
                    <Project key={index}>
                        <a href={project.link} target="_blank">
                            <ProjectTitle>{project.project}</ProjectTitle>
                            <ProjectCard>
                                <img
                                    src={project.thumbnail}
                                    alt={project.project}
                                    title={project.project}
                                />
                            </ProjectCard>
                        </a>
                    </Project>
                ))}
            </ProjectList>
        </ProjectsSectionContainer>
    );
};

export default ProjectsSection;
