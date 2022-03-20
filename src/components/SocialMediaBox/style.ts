import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
    display: flex;
    max-width: 90vw;

    padding: 3px;
    gap: 5px;

    position: absolute;
    top: 10px;
    left: 10px;
    right: 0;

    @media (min-width: 768px) {
        flex-direction: column;

        right: 10px;
        left: 10px;
    }
`;
