import {
    ScrollDown,
    ScrollDownMessageBox,
    ScrollDownMessageText,
} from './style';

export const ScrollDownMessage = () => (
    <ScrollDownMessageBox>
        <ScrollDownMessageText>scroll down</ScrollDownMessageText>
        <ScrollDown>
            <span></span>
        </ScrollDown>
    </ScrollDownMessageBox>
);
