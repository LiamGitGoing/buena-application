import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TitleWrapper = styled.h1`
  display: flex;
  font: ${theme.fonts.primary};
  font-size: ${theme.sizes.title};
  justify-content: center;
  align-items: center;
`;
