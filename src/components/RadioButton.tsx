import React from 'react';

interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, label }) => {
    return (
        <div>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label>{label}</label>
        </div>
    );
};

export default RadioButton;