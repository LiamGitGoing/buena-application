import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { setSalary } from '../context/formSlice';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';

const SalaryIndications: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { salary } = useSelector((state: any) => state.form);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSalary(e.target.value));
    };

    const handleNext = () => {
        navigate('/summary'); 
    };

    return (
        <div>
            <h2>Salary Indications</h2>
            <RadioButton
                name="salary"
                value="0-1'000"
                checked={salary === "0-1'000"}
                onChange={handleChange}
                label="0-1'000"
            />
            <RadioButton
                name="salary"
                value="1'000 - 2'000"
                checked={salary === "1'000 - 2'000"}
                onChange={handleChange}
                label="1'000-2'000"
            />
            <RadioButton
                name="salary"
                value="2'000 - 3'000"
                checked={salary === "2'000 - 3'000"}
                onChange={handleChange}
                label="2'000-3'000"
                />
            <RadioButton
                name="salary"
                value="3'000 - 4'000"
                checked={salary === "3'000 - 4'000"}
                onChange={handleChange}
                label="3'000-4'000"
                />
            <RadioButton
                name="salary"
                value="Mehr als 4'000"
                checked={salary === "Mehr als 4'000"}
                onChange={handleChange}
                label="Mehr als 4'000"
                />
            <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

export default SalaryIndications;
