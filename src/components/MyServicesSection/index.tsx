import ServiceCard from '../ServiceCard';
import { MyServicesSectionContainer } from './style';

const MyServicesSection = () => {
    return (
        <MyServicesSectionContainer>
            <ServiceCard
                service="Criação de Sites"
                iconName="desktop-outline"
            />
            <ServiceCard
                service="Sites Responsivos"
                iconName="id-card-outline"
            />
            <ServiceCard service="Desenvolvimento" iconName="code-outline" />
        </MyServicesSectionContainer>
    );
};

export default MyServicesSection;
