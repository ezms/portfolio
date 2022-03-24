import styled from 'styled-components';

export const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px 3em;
    max-width: 1500px;
    width: 100%;

    input,
    textarea {
        border: 0;
        border-bottom: 1px solid var(--light-gray-color);
        background: transparent;
        max-width: 900px;
        width: 95%;

        :focus {
            border-bottom: 1px solid;
            transform: translateX(1);
            transition: 0.3s;

            ::placeholder {
                opacity: 0;
                transform: translateX(5px);
                transition: 0.3s;
            }
        }

        ::placeholder {
            color: var(--light-gray-color);
        }
    }

    input,
    button {
        height: 40px;
    }

    textarea {
        height: 120px;
        resize: none;
        overflow-wrap: break-word;
        overflow: hidden;
    }

    input,
    textarea,
    button {
        margin-top: 1.3rem;
        max-width: 900px;

        :focus {
            outline: transparent;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        background-color: var(--gray-color);
        border-radius: 5px;
        border: none;
        padding: 10px;

        color: var(--white-color);
        font-size: 24px;

        :hover {
            transform: scale(1.02, 1.02);
            transition: 0.2s;
        }

        ion-icon {
            font-size: 24px;
        }
    }

    @media (min-width: 414px) {
        button {
            width: 150px;
        }
    }

    @media (min-width: 768px) {
        input {
            height: 35px;
        }

        button {
            font-size: 20px;
        }
    }

    @media (min-width: 1024px) {
        height: 50vh;
        margin-inline: auto;

        input,
        textarea {
            font-size: 24px;
        }

        textarea {
            height: 165px;
        }
    }
`;
