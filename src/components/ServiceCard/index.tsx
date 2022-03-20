import { Ionicons } from '../../ion-icons';
import { ServiceCardContainer, ServiceCardTitle } from './style';

interface ServiceCardProps {
    service: string;
    description?: string;
    iconName: Ionicons;
}

const ServiceCard = ({ service, description, iconName }: ServiceCardProps) => (
    <ServiceCardContainer>
        <ion-icon name={iconName}></ion-icon>
        <ServiceCardTitle>{service}</ServiceCardTitle>
    </ServiceCardContainer>
);

export default ServiceCard;
