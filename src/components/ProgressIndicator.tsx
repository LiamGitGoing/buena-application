import React from 'react';

interface ProgressIndicatorProps {
    step: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ step }) => {
    return (
        <div className="progress-indicator">
            <div>Step {step} of 3</div>
        </div>
    );
};

export default ProgressIndicator;