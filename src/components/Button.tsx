import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  type: 'text' | 'link' | 'dashed' | 'default' | 'primary';
  text: string;
  onClick: () => void;
  width?: number;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  width,
  isDisabled,
}) => {
  return (
    <AntButton
      type={isDisabled ? 'dashed' : type}
      onClick={isDisabled ? undefined : onClick}
      shape='round'
      size='large'
      style={{ width: width ? width : 120, height: 60 }}
      disabled={isDisabled}
    >
      {text}
    </AntButton>
  );
};

export default Button;
