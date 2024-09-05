import React from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Progress as AntProgress } from 'antd';
import { ProgressWrapper } from './ProgressIndicatorStyled';
import { CheckOutlined } from '@ant-design/icons';

export interface IProgressIndicator {
  isRoot?: boolean;
}

const ProgressIndicator: React.FC<IProgressIndicator> = ({
  isRoot = false,
}) => {
  const location = useLocation();
  const steps = ['/personal-info', '/salary-indications'];
  const currentStep = steps.indexOf(location.pathname);
  let percentage = (currentStep / steps.length) * 100;

  if (location.pathname === '/summary') {
    percentage = 100;
  }

  const status = percentage === 100 ? 'success' : 'active';

  return (
    <div>
      <ProgressWrapper isRoot={isRoot}>
        <AntProgress
          percent={percentage}
          status={status}
          strokeColor={theme.colors.darkGrey}
          trailColor={theme.colors.lightGrey}
          format={(percentage) =>
            percentage === 100 ? <CheckOutlined /> : `${percentage}%`
          }
        />
      </ProgressWrapper>
    </div>
  );
};

export default ProgressIndicator;
