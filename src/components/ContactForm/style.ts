import styled from 'styled-components';

export const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 10px 3em;

    input,
    textarea {
        border: 0;
        border-bottom: 1px solid var(--light-gray-color);
        background: transparent;

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

    input {
        :nth-child(2) {
            margin-top: 0;
        }
    }

    input,
    textarea,
    button {
        margin-top: 1.3rem;

        :focus {
            outline: transparent;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
`;
