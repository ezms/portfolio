import {
    PraticingTechTitle,
    SkillSectionContainer,
    SkillSectionTitle,
    Tech,
    TechList,
    TechsBox,
} from './style';
import { techsInUse, techsImPraticing } from '../../shared/techs';

const SkillsSection = () => {
    return (
        <SkillSectionContainer>
            <SkillSectionTitle>Skills</SkillSectionTitle>
            <TechsBox>
                <TechList>
                    {techsInUse.map((tech, index) => (
                        <Tech key={index}>
                            <img
                                src={tech.url}
                                title={tech.tech}
                                alt={tech.tech}
                            />
                        </Tech>
                    ))}
                </TechList>
                <PraticingTechTitle>Praticando:</PraticingTechTitle>
                <TechList>
                    {techsImPraticing.map((techRef, index) => (
                        <Tech key={index}>
                            <img
                                src={techRef.url}
                                title={techRef.tech}
                                alt={techRef.tech}
                            />
                        </Tech>
                    ))}
                </TechList>
            </TechsBox>
        </SkillSectionContainer>
    );
};

export default SkillsSection;
