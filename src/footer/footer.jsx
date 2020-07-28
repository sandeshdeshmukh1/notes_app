

import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Created By Sandesh Deshmukh
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Github Profile-- <a href="https://github.com/sandeshdeshmukh1">https://github.com/sandeshdeshmukh1</a>
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default Footer;