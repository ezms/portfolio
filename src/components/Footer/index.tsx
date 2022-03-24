import { SocialMediaLink } from '../SocialMediaLink';
import {
    FooterContainer,
    FooterEmail,
    FooterInfos,
    FooterMessage,
    FooterScrollTopButton,
    FooterSection,
    FooterTitle,
    SocialMediaBox,
} from './style';

const Footer = () => {
    const scrolltop = () => window.scrollTo(0, 0);

    return (
        <FooterContainer>
            <FooterSection>
                <FooterScrollTopButton onClick={scrolltop}>
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>
                </FooterScrollTopButton>
                <FooterTitle>Contato</FooterTitle>
                <FooterEmail>emanuelzm@protonmail.com</FooterEmail>
                <FooterMessage>
                    Sinta-se a vontade para me mandar uma mensagem nas redes
                    sociais!
                </FooterMessage>
                <SocialMediaBox>
                    <SocialMediaLink
                        anchor="https://www.linkedin.com/in/emanuelzmartins"
                        iconName="logo-linkedin"
                    />
                    <SocialMediaLink
                        anchor="https://github.com/ezms"
                        iconName="logo-github"
                    />
                    <SocialMediaLink
                        anchor="https://web.whatsapp.com/send?phone=+5546999207432"
                        iconName="logo-whatsapp"
                    />
                </SocialMediaBox>
            </FooterSection>
            <FooterInfos>&copy; Copyright 2021 - Emanuel Martins.</FooterInfos>
            <FooterInfos>Feito e Pensado com 💜 por mim.</FooterInfos>
        </FooterContainer>
    );
};

export default Footer;
