import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { TitleWrapper } from './shared/TextStyled';
import ProgressIndicator from '../components/ProgressIndicator';
import { ButtonWrapper, VideoWrapper } from './EntryPageStyled';
import hero from '../assets/videos/hero.mp4';
import Button from '../components/Button';

const EntryPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/personal-info');
  };
  return (
    <Card>
      <ProgressIndicator isRoot={true} />
      <TitleWrapper>Welcome to your Buena application form!</TitleWrapper>
      <VideoWrapper>
        <video
          src={hero}
          autoPlay
          muted
          loop
          style={{ width: '90%', borderRadius: '8px' }}
        />
      </VideoWrapper>
      <ButtonWrapper>
        <Button text='Next' onClick={handleNext} />
      </ButtonWrapper>
    </Card>
  );
};

export default EntryPage;
