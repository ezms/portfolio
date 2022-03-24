import { useRef } from 'react';
import { ContactFormContainer } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com/';

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
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const form = useRef<HTMLHeadingElement | any>();

    const toSubmit = (data: any, event: any) => {
        event.target.reset();
        emailjs
            .send(
                'gmailMessage',
                'template_kdcakt9',
                form.current,
                'jnvfv468kKwTUIHrC'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.error(error.text);
                }
            );
    };

    return (
        <ContactFormContainer ref={form} onSubmit={handleSubmit(toSubmit)}>
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
            <input type="url" placeholder="Links" {...register('link')} />
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
