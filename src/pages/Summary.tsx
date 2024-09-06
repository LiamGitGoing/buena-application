import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '../components/ProgressIndicator';
import Card from '../components/Card';
import { ButtonWrapper, ContentWrapper, TitleWrapper } from './shared/Styled';
import Button from '../components/Button';
import {
  ItemWrapper,
  TextWrapper,
  LabelWrapper,
  ValueWrapper,
  DescriptionWrapper,
} from './SummaryStyled';

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const {
    fullName,
    email,
    phoneNumber,
    salary,
    streetAddress,
    postalCode,
    city,
  } = useSelector((state: any) => state.form);

  const handleEdit = () => navigate('/personal-info');
  const handleSubmit = () => (window.location.href = 'https://www.buena.com');

  const items = [
    { label: 'Full Name:', value: fullName },
    { label: 'Email:', value: email },
    { label: 'Phone Number:', value: phoneNumber },
    { label: 'Street Address:', value: streetAddress },
    { label: 'Postal Code:', value: postalCode },
    { label: 'City:', value: city },
    { label: 'Salary Indications:', value: salary },
  ];

  return (
    <ContentWrapper>
      <Card>
        <ProgressIndicator />
        <TitleWrapper>Summary</TitleWrapper>
        <DescriptionWrapper>
          <TextWrapper>
            {items.map((item, index) => (
              <ItemWrapper key={index}>
                <LabelWrapper>{item.label}</LabelWrapper>
                <ValueWrapper>{item.value || 'N/A'}</ValueWrapper>
              </ItemWrapper>
            ))}
          </TextWrapper>
        </DescriptionWrapper>
        <ButtonWrapper>
          <Button type='default' text='Edit' onClick={handleEdit} />
          <Button type='primary' text='Submit' onClick={handleSubmit} />
        </ButtonWrapper>
      </Card>
    </ContentWrapper>
  );
};

export default Summary;
