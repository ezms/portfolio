import { useNavigate } from 'react-router-dom';
import {
    PortfolioBannerTitle,
    PortfolioHeaderContainer,
    PortifolioBanner,
} from './style';

const PortfolioHeader = () => {
    const navigate = useNavigate();

    return (
        <PortfolioHeaderContainer>
            <PortifolioBanner></PortifolioBanner>
            <PortfolioBannerTitle>
                <h1>Portfólio</h1>
            </PortfolioBannerTitle>
        </PortfolioHeaderContainer>
    );
};

export default PortfolioHeader;
