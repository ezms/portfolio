import ContactForm from '../../components/ContactForm';
import ContactMessage from '../../components/ContactMessage';
import { ContactPageContainer } from './style';

const Contact = () => {
    return (
        <ContactPageContainer>
            <div>
                <ContactMessage />
                <ContactForm />
            </div>
        </ContactPageContainer>
    );
};

export default Contact;
