import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';
import { setSalary } from '../context/formSlice';
import ProgressIndicator from '../components/ProgressIndicator';
import Card from '../components/Card';
import { ButtonWrapper, ContentWrapper, TitleWrapper } from './shared/Styled';
import Button from '../components/Button';
import {
  RadioItem,
  RadioStyled,
  RadioWrapper,
} from './SalaryIndicationsStyled';

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
    <ContentWrapper>
      <Card>
        <ProgressIndicator />

        <TitleWrapper>Your Salary Range</TitleWrapper>
        <RadioWrapper>
          <RadioStyled.Group value={salary} onChange={handleChange}>
            <Space direction='vertical'>
              <RadioItem>
                <RadioStyled value="0-1'000">0-1'000</RadioStyled>
              </RadioItem>
              <RadioItem>
                <RadioStyled value="1'000 - 2'000">1'000 - 2'000</RadioStyled>
              </RadioItem>
              <RadioItem>
                <RadioStyled value="2'000 - 3'000">2'000 - 3'000</RadioStyled>
              </RadioItem>
              <RadioItem>
                <RadioStyled value="3'000 - 4'000">3'000 - 4'000</RadioStyled>
              </RadioItem>
              <RadioItem>
                <RadioStyled value="More than 4'000">
                  More than 4'000
                </RadioStyled>
              </RadioItem>
            </Space>
          </RadioStyled.Group>
        </RadioWrapper>
        <ButtonWrapper>
          <Button type='primary' text='Next' onClick={handleNext} />
        </ButtonWrapper>
      </Card>
    </ContentWrapper>
  );
};

export default SalaryIndications;
