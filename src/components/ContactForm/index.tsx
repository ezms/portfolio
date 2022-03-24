import { FormEvent, useRef } from 'react';
import { ContactFormContainer } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com/';
import swal from 'sweetalert';

const ContactForm = () => {
    const emptyMessage = 'Este campo não pode estar vazio!';

    const schema = yup.object().shape({
        name: yup.string().required(emptyMessage),
        email: yup.string().email().required(emptyMessage),
        message: yup.string().required(emptyMessage),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const toSubmit = (data: any) => {
        emailjs
            .send('gmailMessage', 'template_kdcakt9', data, 'jnvfv468kKwTUIHrC')
            .then(
                (result) => {
                    swal(
                        'Email recebido! 🎉',
                        'Irei retornar em breve!',
                        'success'
                    );
                },
                (error) => {
                    swal(
                        'Algo deu errado 😿',
                        'Desculpa pelo inconveniente, em manutenção 🛠',
                        'error'
                    );
                }
            );

        reset();
    };

    return (
        <ContactFormContainer onSubmit={handleSubmit(toSubmit)}>
            <input
                type="text"
                placeholder="Nome*"
                required
                {...register('name')}
            />
            <input
                type="email"
                placeholder="Email*"
                required
                {...register('email')}
            />
            <textarea
                placeholder="Mensagem*"
                required
                {...register('message')}
            ></textarea>
            <button type="submit">
                Enviar
                <ion-icon name="send-outline"></ion-icon>
            </button>
        </ContactFormContainer>
    );
};

export default ContactForm;
