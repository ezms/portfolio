import { ContactFormContainer } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com/';
import toast from 'react-hot-toast';

const toastStyle = {
    width: '300px',
    height: '50px',
    fontSize: '24px',
};

const ContactForm = () => {
    const emptyMessage = 'Este campo não pode estar vazio!';

    const schema = yup.object().shape({
        name: yup.string().required(emptyMessage),
        email: yup.string().email().required(emptyMessage),
        message: yup.string().required(emptyMessage),
    });

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const toSubmit = (data: any) => {
        emailjs
            .send('gmailMessage', 'template_kdcakt9', data, 'jnvfv468kKwTUIHrC')
            .then(
                (result) => {
                    toast.success('Email enviado! 🎉', {
                        style: toastStyle,
                    });
                },
                (error) => {
                    toast.error(
                        'Ops, algo deu errado, estamos em manutenção 🛠',
                        {
                            style: toastStyle,
                        }
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
