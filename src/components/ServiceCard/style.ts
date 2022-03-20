import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
    width: 300px;
    height: 240px;
    background-color: var(--light-gray-color);
    border-bottom: 5px solid var(--dark-gray-color);

    ion-icon {
        font-size: 56px;
        padding: 30px 0 40px 30px;
    }
`;

export const ServiceCardTitle = styled.h3`
    color: var(--black-color);
    font-size: 1.5rem;
    font-weight: 500;
    font-family: var(--inter-font);
    margin-top: 0.5em;
    margin-left: 30px;
    width: 150px;
`;
