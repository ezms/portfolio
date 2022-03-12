import AppRoutes from './routes';
import GlobalStyles, { Root } from './styles/global';
import Animations from './styles/animations';

const App = () => {
    return (
        <Root>
            <GlobalStyles />
            <Animations />
            <AppRoutes />
        </Root>
    );
};

export default App;
