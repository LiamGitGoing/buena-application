import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  text: string;
  onClick: () => void;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, link }) => {
  return link ? (
    <a href={link} style={{ textDecoration: 'none' }}>
      <AntButton type='primary' onClick={onClick}>
        {text}
      </AntButton>
    </a>
  ) : (
    <AntButton type='primary' onClick={onClick}>
      {text}
    </AntButton>
  );
};

export default Button;
