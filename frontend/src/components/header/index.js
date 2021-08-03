import React from 'react';
import {MenuWrapper} from './style.js';
import {Menu} from '@styled-icons/boxicons-regular/Menu';

const Header = ({number}) => {

  return (
    <>
      <MenuWrapper>
        <h1>
          Logo
        </h1>
        <Menu size={50}/>
      </MenuWrapper> 
    </>
  )
}

export default Header;