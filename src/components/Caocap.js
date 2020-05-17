import React from "react";
function Caocap(props) {
  return (
    <div id="columns">
      <figure>
        <iframe
          height="800"
          src={props.caocapUrl}
          rel="nofollow"
          width="100%"
        ></iframe>
      </figure>
    </div>
  );
}

export default Caocap;
