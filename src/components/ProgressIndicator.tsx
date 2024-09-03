import React from 'react';
import { useLocation } from 'react-router-dom';


const ProgressIndicator: React.FC = () => {
    const location = useLocation();
    const steps = ['/personal-info', '/salary-indications', '/summary'];
    const currentStep = steps.indexOf(location.pathname) + 1;
    const progressPercentage = (currentStep / steps.length) * 100;

    return (
        <div className="progress-indicator">
            <div>Step {currentStep} of {steps.length}</div>
        </div>
    );
};

export default ProgressIndicator;