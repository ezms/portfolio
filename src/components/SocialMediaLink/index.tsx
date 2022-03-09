import { Ionicons } from '../../ion-icons';
import { Anchor } from './style';

interface SocialMediaLinkProps {
    anchor: string;
    iconName: Ionicons;
}

export const SocialMediaLink = ({ anchor, iconName }: SocialMediaLinkProps) => (
    <Anchor target="_blank" href={anchor}>
        <ion-icon name={iconName}></ion-icon>
    </Anchor>
);
