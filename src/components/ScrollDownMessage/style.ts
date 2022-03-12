import styled from 'styled-components';

export const ScrollDownMessageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    position: absolute;
    bottom: 3px;
    opacity: 0.6;
`;

export const ScrollDownMessageText = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: var(--white-color);
`;

export const ScrollDown = styled.div`
    width: 40px;
    height: 40px;

    transform: translateY(-10px) translateX(-0%) rotate(45deg);

    span {
        display: block;

        position: absolute;
        top: 0;
        left: 0;

        width: 20%;
        height: 20%;

        border-bottom: 2px solid var(--white-color);
        border-right: 2px solid var(--white-color);

        animation: scrolldown 1.5s linear infinite;

        :nth-child(1) {
            transform: translate(15px, 15px);
        }

        opacity: 0;
    }
`;
