import AppRoutes from './routes';
import GlobalStyles, { Root } from './styles/global';

const App = () => {
    return (
        <Root>
            <GlobalStyles />
            <AppRoutes />
        </Root>
    );
};

export default App;
