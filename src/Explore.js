import React, { useState ,useEffect} from "react";
import Caocap from "./components/Caocap";
import {database} from "./firebase"
function ExplorePage() {

  const [CaocapList,setCaocapList] = useState();
  useEffect(() => {
    
    const caocaps =  database.ref("caocap").limitToLast(30);
      const caocaplist = [];
      caocaps.on('value',(snapshot)=>{
          const valuee = snapshot.val();
          for(let id in valuee){caocaplist.push(valuee[id]);}
          setCaocapList(caocaplist);
      })

      

  },[]);
  
  return (
    <div className="columns">

        {CaocapList ? CaocapList.map((value,index) => <Caocap props={value} key = {index} />):""}

    </div>
  );
}

export default ExplorePage;
