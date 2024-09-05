import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Radio, Button as AntButton } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';
import { setSalary } from '../context/formSlice';
import ProgressIndicator from '../components/ProgressIndicator';

const SalaryIndications: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const salary = useSelector((state: any) => state.form.salary);

  const handleChange = (e: RadioChangeEvent) => {
    dispatch(setSalary(e.target.value));
  };

  const handleNext = () => {
    navigate('/summary');
  };

  return (
    <div>
      <ProgressIndicator />

      <h2>Salary Indications</h2>
      <Radio.Group value={salary} onChange={handleChange}>
        <Radio value="0-1'000">0-1'000</Radio>
        <Radio value="1'000 - 2'000">1'000 - 2'000</Radio>
        <Radio value="2'000 - 3'000">2'000 - 3'000</Radio>
        <Radio value="3'000 - 4'000">3'000 - 4'000</Radio>
        <Radio value="Mehr als 4'000">Mehr als 4'000</Radio>
      </Radio.Group>
      <AntButton type='primary' onClick={handleNext}>
        Next
      </AntButton>
    </div>
  );
};

export default SalaryIndications;
