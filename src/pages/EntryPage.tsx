import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import {
  ButtonWrapper,
  ContentWrapper,
  SubtitleWrapper,
  TitleWrapper,
} from './shared/Styled';
import ProgressIndicator from '../components/ProgressIndicator';
import { VideoWrapper } from './EntryPageStyled';
import hero from '../assets/videos/hero.mp4';
import Button from '../components/Button';

const EntryPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/personal-info');
  };
  return (
    <ContentWrapper>
      <Card>
        <ProgressIndicator isRoot={true} />
        <TitleWrapper>Register with Buena </TitleWrapper>
        <SubtitleWrapper>and book your next apartment</SubtitleWrapper>
        <VideoWrapper>
          <video
            src={hero}
            autoPlay
            muted
            loop
            style={{ width: '60%', borderRadius: '8px' }}
          />
        </VideoWrapper>
        <ButtonWrapper>
          <Button type='primary' text='Next' onClick={handleNext} />
        </ButtonWrapper>
      </Card>
    </ContentWrapper>
  );
};

export default EntryPage;
