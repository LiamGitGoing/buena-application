import styled from 'styled-components';
import { theme } from '../styles/theme';

export const ProgressWrapper = styled.div<{ isRoot: boolean }>`
  visibility: ${({ isRoot }) => (isRoot ? 'hidden' : 'visible')};

  .ant-progress-text {
    color: ${theme.colors.darkGrey}; 
  }

  .ant-progress-status-success .ant-progress-text {
    color: ${theme.colors.darkGrey};
  }
  }
`;
