import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { HEADER_HEIGHT } from '../helpers/constants';

export const TitleWrapper = styled.h1`
  display: flex;
  font: ${theme.fonts.primary};
  font-size: ${theme.sizes.header};
  justify-content: center;
  align-items: center;
  font-weight: ${theme.weights.regular};
  margin: 0;
`;

export const SubtitleWrapper = styled.h2`
  display: flex;
  font: ${theme.fonts.primary};
  font-size: ${theme.sizes.title};
  justify-content: center;
  align-items: center;
  color: ${theme.colors.darkGrey};
  font-weight: ${theme.weights.regular};
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: calc(100vh - ${HEADER_HEIGHT});
  justify-content: center;
  align-items: center;
`;

export const GifWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 0;

  img {
    max-width: 50%;
    height: auto;
  }
`;
