import styled from 'styled-components';
import { theme } from '../styles/theme';

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font: ${theme.fonts.primary};
  font-size: ${theme.sizes.body};
  color: ${theme.colors.black};
  font-weight: ${theme.weights.regular};
  margin: 0;
`;

export const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  margin: 10px 0;
`;

export const LabelWrapper = styled.div`
  flex: 0 0 150px;
  text-align: left;
  font-weight: ${theme.weights.medium};
`;

export const ValueWrapper = styled.div`
  flex: 0 0 auto;
  text-align: left;
  padding-left: 10px;
  white-space: nowrap;
`;
