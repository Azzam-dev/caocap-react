import React, { useState ,useEffect ,useRef} from "react";
import Caocap from "./components/Caocap";
import {database} from "./firebase"
import StackGrid from "react-stack-grid";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AutoResponsive from"autoresponsive-react"

function ExplorePage() {

  const [CaocapList,setCaocapList] = useState();
  useEffect(() => {
    
    const caocaps =  database.ref("caocap").limitToLast(30);
      const caocaplist = [];
      caocaps.on('value',(snapshot)=>{
          const valuee = snapshot.val();
          for(let id in valuee){caocaplist.push(valuee[id]);
         console.log( valuee[id].type)
            
          }
          setCaocapList(caocaplist);

      })

    
      
  },[]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));
  const con = useRef("container");
  
  return (
    <div>
      <AutoResponsive className="container" >
      {CaocapList ? CaocapList.map((value,index) => (
        
                <Caocap props={value} />
                 )):""}
      </AutoResponsive>

    </div>

  );
}

export default ExplorePage;
