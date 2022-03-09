import { ScrollDownMessage } from '../ScrollDownMessage';
import SignalsContainer from '../SignalsContainer';
import SocialMediaBox from '../SocialMediaBox';
import {
    PresentationBackground,
    PresentationSectionContainer,
    PresentationText,
    PresentationTitle,
    PresentationTitleContainer,
} from './style';

const PresentationSection = () => {
    return (
        <PresentationSectionContainer>
            <PresentationBackground />
            <SocialMediaBox />
            <PresentationTitleContainer>
                <SignalsContainer />
                <PresentationTitle>Front-End Developer</PresentationTitle>
                <PresentationText>
                    Olá! Meu nome é Emanuel Z. Martins, nos últimos anos comecei
                    a trabalhar com programação front-end em start-ups e
                    projetos freelance!
                </PresentationText>
            </PresentationTitleContainer>
            <ScrollDownMessage />
        </PresentationSectionContainer>
    );
};

export default PresentationSection;
