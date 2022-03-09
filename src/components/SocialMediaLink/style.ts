import styled from 'styled-components';

export const Anchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    -webkit-box-align: center;
    -webkit-box-pack: center;

    background-color: var(--light-gray-color);
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border-radius: 5px;

    width: 30px;
    height: 30px;
    opacity: 0.3;

    color: var(--black-color);

    ion-icon {
        font-size: 24px;
    }

    :hover {
        opacity: 0.9;
    }
`;
