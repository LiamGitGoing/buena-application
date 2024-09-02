import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { setFullName, setEmail, setPhoneNumber } from '../context/formSlice';
import Input from '../components/Input';
import Button from '../components/Button';

const PersonalInfo: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fullName, email, phoneNumber } = useSelector((state: any) => state.form);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'fullName':
                dispatch(setFullName(value));
                break;
            case 'email':
                dispatch(setEmail(value));
                break;
            case 'phoneNumber':
                dispatch(setPhoneNumber(value));
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        navigate('/salary-indications'); 
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <Input
                type="text"
                value={fullName}
                onChange={handleChange}
                placeholder="Full Name"
                name="fullName"
            />
            <Input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                name="email"
            />
            <Input
                type="tel"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                name="phoneNumber"
            />
            <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

export default PersonalInfo;
