import React from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Progress as AntProgress } from 'antd';
import { ProgressWrapper } from './ProgressIndicatorStyled';

const ProgressIndicator: React.FC = () => {
  const location = useLocation();
  const steps = ['/personal-info', '/salary-indications'];
  const currentStep = steps.indexOf(location.pathname);
  var percentage = (currentStep / steps.length) * 100;

  if (location.pathname === '/') {
    return null;
  }

  if (location.pathname === '/summary') {
    percentage = 100;
  }

  const status = percentage === 100 ? 'success' : 'active';
  const strokeColor =
    status === 'success' ? theme.colors.darkYellow : theme.colors.lightYellow;

  return (
    <div>
      <ProgressWrapper>
        <AntProgress
          percent={percentage}
          status={status}
          strokeColor={strokeColor}
          trailColor={theme.colors.lightGrey}
        />
      </ProgressWrapper>
    </div>
  );
};

export default ProgressIndicator;
