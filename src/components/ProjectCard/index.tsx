import React from 'react';
import {
    ProjectCardContainer,
    ProjectAnchorButton,
    ProjectTags,
    ProjectTagsContainer,
    ProjectThumbnail,
    ProjectAnchorContainer,
    ProjectTitle,
    ProjectRepoAnchor,
} from './style';

interface ProjectCardProps {
    thumbnailURL: string;
    projectName: string;
    url: string;
    repository: string;
    tags: string[];
}

const ProjectCard = ({
    projectName,
    repository,
    thumbnailURL,
    url,
    tags,
}: ProjectCardProps) => (
    <ProjectCardContainer>
        <ProjectThumbnail
            src={thumbnailURL}
            title={projectName}
            alt={projectName}
        />
        <ProjectTitle>{projectName}</ProjectTitle>
        <ProjectTagsContainer>
            {tags.map((tag, index) => (
                <ProjectTags key={index}>{tag}</ProjectTags>
            ))}
        </ProjectTagsContainer>
        <ProjectAnchorContainer>
            <ProjectAnchorButton
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                Site
            </ProjectAnchorButton>
            <ProjectRepoAnchor
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
            >
                <ion-icon name="logo-github"></ion-icon>
            </ProjectRepoAnchor>
        </ProjectAnchorContainer>
    </ProjectCardContainer>
);

export default ProjectCard;
