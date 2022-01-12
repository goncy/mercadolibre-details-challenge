import React from 'react';
import { Box, InputGroup, Input, InputRightAddon } from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'

import './Navbar.css';

const Navbar: React.FunctionComponent = () => {
  return (
    <Box className='navbar'>
      <div className="navbar__wrapper">
        <div className='navbar__first-row'>
          <div className="navbar__navbar-brand">
            <h1>Mercado Libre</h1>
          </div>
          <div className='navbar__navbar-search'>
            <form>
              <InputGroup className='navbar__search-input' >
                <Input type="text" name="search-bar" id="search-bar" placeholder="Buscar productos, marcas y mas..." />
                <InputRightAddon children={<SearchIcon />} />
              </InputGroup>
            </form>
          </div>
          <div className='navbar__navbar-promotion'>
            <p>Envios gratis en 24 hs a partir de $3500</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
