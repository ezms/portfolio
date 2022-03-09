import styled from 'styled-components';

export const ScrollDownMessageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    position: absolute;
    bottom: 10px;
    opacity: 0.6;

    ion-icon {
        font-size: 20px;
        color: var(--white-color);
    }
`;

export const ScrollDownMessageText = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: var(--white-color);
`;
