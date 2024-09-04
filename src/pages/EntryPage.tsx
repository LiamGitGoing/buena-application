import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '../components/Button';

const EntryPage: React.FC = () => {
    const navigate = useNavigate(); 
    const handleNext = () => {
        navigate('/personal-info'); 
    };
    return (
        <div>
            <h2>Welcome to your Buena application form!</h2>
            <Button onClick={handleNext}>Start</Button>
        </div>
    );
};

export default EntryPage;
