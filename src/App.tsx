import AppRoutes from './routes';
import GlobalStyles, { Root } from './styles/global';
import Animations from './styles/animations';
import { useEffect } from 'react';
import Aos from 'aos';
import { Toaster } from 'react-hot-toast';

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Root>
            <GlobalStyles />
            <Animations />
            <AppRoutes />
            <Toaster position="bottom-left" reverseOrder={true} />
        </Root>
    );
};

export default App;
