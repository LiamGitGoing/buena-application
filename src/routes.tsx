import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import SalaryIndications from './pages/SalaryIndications';
import Summary from './pages/Summary';
import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/salary" element={<SalaryIndications />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;