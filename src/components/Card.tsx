import React from 'react';
import { Card as AntCard } from 'antd';
import { CardWrapper } from './CardStyled';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <CardWrapper>
      <AntCard bordered={false} style={{ width: 700, height: 550 }}>
        {children}
      </AntCard>
    </CardWrapper>
  );
};

export default Card;
