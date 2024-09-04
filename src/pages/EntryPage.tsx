import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { setSalary } from '../context/formSlice';
import RadioButton from '../components/RadioButton';
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
