import React from "react";
import "../css/style.css";
import $ from "jquery";

import { makeStyles } from '@material-ui/core/styles';
import paper from '@material-ui/core/Paper';

function Caocap({props , type,key}) {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(1),
     // textAlign: 'center',
      color: theme.palette.text.secondary,
      width: 300
    },
  }));

  return (
      
    <figure>
      <iframe title="gg"
    height="450"
    width="100%"
    referrerpolicy="no-referrer"
    sandbox="allow-scripts"
    src={props.link}
    style = {{ border: "none;" ,padding:"1"}}
    >
      </iframe>
    </figure>
  
  );

 
 
}

export default Caocap;
