import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @keyframes scrolldown {
        0% {
            top: -5px;
            left: -5px;
            opacity: 0;
        }
        
        25% {
            top: 0px;
            left: 0px;
            opacity: 1;
        }
        
        50% {
            top: 2.5px;
            left: 2.5px;
            opacity: 1;
        }
        
        75% {
            top: 4px;
            left: 4px;
            opacity: 1;
        }
        
        100% {
            top: 5px;
            left: 5px;
            opacity: 0;
        }
    }

`;
