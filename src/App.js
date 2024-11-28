import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Conponents/Header/Header';
import { RunningPage } from './Conponents/RunningPage/RunningPage';
import { CrossFitPage } from './Conponents/CrossFit/CrossFit';
import { RenfoMusculairePage } from './Conponents/RenfoMusculaire/RenfoMusculaire';
import { HomePage } from './Conponents/HomePage/HomePage';
import { AboutPage } from './Conponents/About/About'
import { ActivityPage } from './Conponents/Activite/Activity';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/running" element={<RunningPage />} />
                <Route path="/crossfit" element={<CrossFitPage/>} />
                <Route path="/renfomusculaire" element={<RenfoMusculairePage/>} />  
                <Route path="/activity" element={<ActivityPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </Router>
    );
}

export default App;

