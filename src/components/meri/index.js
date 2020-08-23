import React from "react";
import Iframe from "react-iframe";
import "./styles.css";

function Meri() {
  return (
    <div className="divIframeContainer">
      <Iframe
        url="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=076e4bb4-1542-4538-9e47-fa42f9b4ebff&serviceInstanceID=cc36dc87-8f99-4851-8920-b891693a05fa"
        width="100%"
        height="100%"
        id="myId"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default Meri;
