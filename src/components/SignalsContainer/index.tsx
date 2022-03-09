import { Box, IconBox } from './style';

const SignalsContainer = () => {
    return (
        <IconBox>
            <Box>
                <ion-icon
                    style={{ fontSize: '30px' }}
                    name="at-outline"
                ></ion-icon>
            </Box>
            <Box>
                <ion-icon
                    style={{ fontSize: '30px' }}
                    name="cloud-outline"
                ></ion-icon>
            </Box>
            <Box>
                <ion-icon
                    style={{ fontSize: '30px' }}
                    name="code-slash-outline"
                ></ion-icon>
            </Box>
            <Box>
                <ion-icon
                    style={{ fontSize: '30px' }}
                    name="analytics-outline"
                ></ion-icon>
            </Box>
        </IconBox>
    );
};

export default SignalsContainer;
