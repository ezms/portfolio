import { SocialMediaLink } from '../SocialMediaLink';
import { SocialMediaContainer } from './style';

const SocialMediaBox = () => {
    return (
        <SocialMediaContainer>
            <SocialMediaLink
                anchor="https://github.com/ezms"
                iconName="logo-github"
            />
            <SocialMediaLink
                anchor="https://www.linkedin.com/in/emanuelzmartins"
                iconName="logo-linkedin"
            />
            <SocialMediaLink
                anchor="mailto:emanuelzm@protonmail.com"
                iconName="mail-outline"
            />
        </SocialMediaContainer>
    );
};

export default SocialMediaBox;
