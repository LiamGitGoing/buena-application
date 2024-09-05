import React from 'react';
import { HeaderWrapper, LogoWrapper } from './HeaderStyled';
import logo from '../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <a href='https://www.buena.com'>
          <img src={logo} alt='Buena company logo' width='83' height='32' />
        </a>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
