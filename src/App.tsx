import AppRoutes from './routes';
import GlobalStyles, { Root } from './styles/global';
import Animations from './styles/animations';
import { useEffect } from 'react';
import Aos from 'aos';

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Root>
            <GlobalStyles />
            <Animations />
            <AppRoutes />
        </Root>
    );
};

export default App;
