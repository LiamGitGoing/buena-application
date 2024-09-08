import React from 'react';
import { HeaderWrapper } from './HeaderStyled';
import logo from '../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <a href='https://www.buena.com'>
        <img src={logo} alt='Buena company logo' width='83' height='32' />
      </a>
    </HeaderWrapper>
  );
};

export default Header;
