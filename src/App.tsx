import AppRoutes from './routes';
import GlobalStyles, { Root } from './styles/global';
import Animations from './styles/animations';
import { Toaster } from 'react-hot-toast';

const App = () => {
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
