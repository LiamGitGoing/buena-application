import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressIndicator from '../components/ProgressIndicator';

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const { fullName, email, phoneNumber, salary } = useSelector(
    (state: any) => state.form
  );

  const handleEdit = () => {
    navigate('/personal-info');
  };

  return (
    <div>
      <ProgressIndicator />

      <h2>Summary</h2>
      <p>
        <strong>Full Name:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Salary Indications:</strong> {salary}
      </p>
      <Button onClick={handleEdit}>Edit</Button>
    </div>
  );
};

export default Summary;
