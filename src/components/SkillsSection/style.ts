import styled from 'styled-components';

export const SkillSectionContainer = styled.section`
    background-color: var(--black-color);

    padding-top: 5em;
    min-height: 100vh;
`;

export const TechsBox = styled.div`
    height: 100%;
    padding-bottom: 3em;
`;

export const SkillSectionTitle = styled.h2`
    color: var(--white-color);
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--roboto-mono-font);
`;

export const TechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    width: 100%;
    max-width: 900px;
    margin-top: 5em;
    margin-inline: auto;
`;

export const Tech = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    img {
        width: 100px;

        :hover {
            transform: scale(1.1, 1.1);
            transition: 0.3s;
        }
    }
`;

export const PraticingTechTitle = styled.h2`
    color: var(--white-color);
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--roboto-mono-font);
    padding-top: 3em;
`;
