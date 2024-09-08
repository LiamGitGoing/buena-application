import styled from 'styled-components';
import { Radio } from 'antd';

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const RadioStyled = styled(Radio)`
  .ant-radio {
    transform: scale(1.3);
  }

  .ant-radio-inner {
    width: 24px;
    height: 24px;
  }

  .ant-radio-inner::after {
    width: 16px;
    height: 16px;
  }

  .ant-radio + span {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export const RadioItem = styled.div`
  margin: 16px 0;
`;
