import { useEffect } from 'react';
import { ScrollDownMessage } from '../ScrollDownMessage';
import SignalsContainer from '../SignalsContainer';
import SocialMediaBox from '../SocialMediaBox';
import BackgroundVideo from './../../assets/videos/background.webm';
import {
    BackgroundSlideShow,
    PresentationSectionContainer,
    PresentationText,
    PresentationTitle,
    PresentationTitleContainer,
} from './style';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AnimateContainer from '../AnimateContainer';

const PresentationSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <AnimateContainer>
            <PresentationSectionContainer>
                <BackgroundSlideShow autoPlay muted loop>
                    <source src={BackgroundVideo} type="video/webm" />
                </BackgroundSlideShow>
                <SocialMediaBox />
                <PresentationTitleContainer>
                    <SignalsContainer />
                    <PresentationTitle
                        data-aos="fade-down"
                        data-aos-duration="3000"
                    >
                        FullStack Developer
                    </PresentationTitle>
                    <PresentationText
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        Olá! Meu nome é Emanuel Z. Martins, nos últimos anos
                        comecei a trabalhar com programação front-end em
                        start-ups e projetos freelance!
                    </PresentationText>
                </PresentationTitleContainer>
                <ScrollDownMessage />
            </PresentationSectionContainer>
        </AnimateContainer>
    );
};

export default PresentationSection;
