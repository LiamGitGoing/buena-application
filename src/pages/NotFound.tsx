import React from 'react';
import {
  ButtonWrapper,
  ContentWrapper,
  GifWrapper,
  SubtitleWrapper,
  TitleWrapper,
} from './shared/Styled';
import Card from '../components/Card';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <ContentWrapper>
      <Card>
        <TitleWrapper>404 - Page Not Found</TitleWrapper>
        <SubtitleWrapper>
          The page you are looking for does not exist.
        </SubtitleWrapper>
        <GifWrapper>
          <img
            alt='panic gif'
            src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJwZmNxcmd0bXZ1eHg4NXgzMHFtZTJ2enFwNjM1YXpnaDJreWxubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J3MJAf2FbKO8oaTaTv/giphy.gif'
          />
        </GifWrapper>
        <ButtonWrapper>
          <Button
            type='primary'
            text='Go to Home'
            onClick={() => (window.location.href = '/')}
            width={200}
          />
        </ButtonWrapper>
      </Card>
    </ContentWrapper>
  );
};

export default NotFound;
