import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';

const AppRoutes = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
