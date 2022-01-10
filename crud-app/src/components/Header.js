import React from 'react';
import {Link} from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
    Toolbar: {  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "10px 3%",
      backgroundColor: 'white',
      height: "70px"  
    },
    Logo: {
        letterSpacing: "0.1rem",
        color:"black",
        fontSize: "1.4rem",
        textDecoration: "none",
        fontWeight: "bolder"
    }
  }))
  

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar>
        <Toolbar className={classes.Toolbar}>  
          <div className={classes.Logo}>           
          CRUD APP USING REDUX-THUNK 
          </div>
        </Toolbar>
      </AppBar>
    
    )
}
