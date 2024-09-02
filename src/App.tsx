import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './context/store';
import PersonalInfo from './pages/PersonalInfo';
import SalaryIndications from './pages/SalaryIndications';
import Summary from './pages/Summary';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<h1>Welcome to Buena</h1>} />
                        <Route path="/personal-info" element={<PersonalInfo />} />
                        <Route path="/salary-indications" element={<SalaryIndications />} />
                        <Route path="/summary" element={<Summary />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
