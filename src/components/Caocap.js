import React from "react";
import "../css/style.css";
function Caocap(props) {
  return (
    <div id="columns">
      <figure>
        <iframe
          height="550"
          src={props.caocapUrl}
          rel="nofollow"
          width="100%"
        ></iframe>
      </figure>
    </div>
  );
}

export default Caocap;
