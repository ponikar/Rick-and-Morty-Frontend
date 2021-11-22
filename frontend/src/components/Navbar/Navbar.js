import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="icon" height="60" />
      </div>
      <div className={classes.toolbar}>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">All Characters</Typography>
        <Typography component={Link} to="/saved" className={classes.heading} variant="h6" align="center">Saved</Typography>
      </div>
    </AppBar>
  );
};

export default Navbar;
