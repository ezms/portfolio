import BackgroundSlider from 'react-background-slider';
import { ScrollDownMessage } from '../ScrollDownMessage';
import SignalsContainer from '../SignalsContainer';
import SocialMediaBox from '../SocialMediaBox';
import {
    PresentationSectionContainer,
    PresentationText,
    PresentationTitle,
    PresentationTitleContainer,
} from './style';
import Background from './../../assets/gifs/monophy.gif';
import ErrorBlack from './../../assets/gifs/error-black.gif';
import MetroNight from './../../assets/gifs/metro-night.gif';
import MountainUnderBlocks from './../../assets/gifs/mountain-under-blocks.gif';
import ProgrammingHorse from './../../assets/gifs/programming-horse.gif';
import Spectre1 from './../../assets/gifs/spectre.gif';
import Spectre2 from './../../assets/gifs/spectre2.gif';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PresentationSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <PresentationSectionContainer>
            <BackgroundSlider
                images={[
                    Spectre1,
                    MetroNight,
                    Background,
                    ProgrammingHorse,
                    ErrorBlack,
                    MountainUnderBlocks,
                    Spectre2,
                ]}
                duration={4}
                transition={0.7}
            />
            <SocialMediaBox />
            <PresentationTitleContainer>
                <SignalsContainer />
                <PresentationTitle
                    data-aos="fade-down"
                    data-aos-duration="3000"
                >
                    FullStack Developer
                </PresentationTitle>
                <PresentationText data-aos="fade-up" data-aos-duration="3000">
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
