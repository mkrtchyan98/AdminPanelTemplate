import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar elevation={0} {...rest}>
    <Toolbar>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden xlDown>
        <IconButton color="inherit" size="large">
          <InputIcon />
        </IconButton>
      </Hidden>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
