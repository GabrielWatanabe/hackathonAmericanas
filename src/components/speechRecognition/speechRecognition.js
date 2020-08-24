import React, { Component } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import record from "../../assets/img/record.png";


const Dictaphone = () => {
  
  const { transcript, resetTranscript } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <img style={{width: '27px',height: '27px',position: 'absolute',top: '51.1%',left: '28%', cursor: 'pointer'}} src={record} onClick={SpeechRecognition.startListening} />
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      <p style={{position: 'absolute',top: '49%',left: '14%'}}>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
