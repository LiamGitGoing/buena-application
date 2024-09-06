import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setFullName,
  setEmail,
  setPhoneNumber,
  setStreetAddress,
  setCity,
  setPostalCode,
} from '../context/formSlice';
import ProgressIndicator from '../components/ProgressIndicator';
import { Input } from 'antd';
import Card from '../components/Card';
import { ButtonWrapper, ContentWrapper, TitleWrapper } from './shared/Styled';
import Button from '../components/Button';
import { FieldsWrapper, InputWrapper } from './PersonalInfoStyled';

const PersonalInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullName, email, phoneNumber, streetAddress, city, postalCode } =
    useSelector((state: any) => state.form);

  const [isDisabled, setIsDisabled] = useState(true);

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
      case 'streetAddress':
        dispatch(setStreetAddress(value));
        break;
      case 'city':
        dispatch(setCity(value));
        break;
      case 'postalCode':
        dispatch(setPostalCode(value));
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    const isInvalid = [
      fullName,
      email,
      phoneNumber,
      streetAddress,
      postalCode,
      city,
    ].some((value) => value.length > 40);
    setIsDisabled(isInvalid);
  };

  useEffect(() => {
    validateInputs();
  }, [fullName, email, phoneNumber, streetAddress, postalCode, city]);

  const handleNext = () => {
    if (!isDisabled) {
      navigate('/salary-indications');
    }
  };

  return (
    <ContentWrapper>
      <Card>
        <ProgressIndicator />
        <TitleWrapper>Personal Information</TitleWrapper>
        <FieldsWrapper>
          <InputWrapper>
            <Input
              name='fullName'
              type='text'
              value={fullName}
              onChange={handleChange}
              placeholder='Full Name'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              placeholder='Email'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='phoneNumber'
              type='tel'
              value={phoneNumber}
              onChange={handleChange}
              placeholder='Phone Number'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='streetAddress'
              type='text'
              value={streetAddress}
              onChange={handleChange}
              placeholder='Street Address'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='postalCode'
              type='text'
              value={postalCode}
              onChange={handleChange}
              placeholder='Postal Code'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='city'
              type='text'
              value={city}
              onChange={handleChange}
              placeholder='City'
              size='large'
              count={{
                show: false,
                max: 40,
              }}
            />
          </InputWrapper>
        </FieldsWrapper>
        <ButtonWrapper>
          <Button
            type='primary'
            text='Next'
            onClick={handleNext}
            isDisabled={isDisabled}
          />
        </ButtonWrapper>
      </Card>
    </ContentWrapper>
  );
};

export default PersonalInfo;
