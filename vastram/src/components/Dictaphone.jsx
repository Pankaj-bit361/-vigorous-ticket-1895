import React from 'react';
import SpeechRecognition, {useSpeechRecognition}   from 'react-speech-recognition';

export const Dictaphone = ({setinput,set,setsearch}) => {
    
const commands=[
    {
    command:"clear",
    callback:({resetTranscript})=>resetTranscript(),
}
,

{
    command:'open *',
    callback:(site)=>{
        console.log(site)
        window.open("http://"+site);
    }
}

,

{
  command:'search *',
  callback:(site)=>{
console.log(site)
setsearch(`${site}`)
  }
},


{
  command:'Chitti *',
  callback:(site)=>{

setinput(`${site}`)
  }
},
{
  command:"go to *",
  callback:(site)=>{
    window.open(`https://belk-xi.vercel.app/${site}`)
  }
}
,
{
  command:"night mode",
  callback:(colour)=>{
    document.body.style.background ="black";
    document.body.style.color="white"
    document.body.style.border="5px solid white"
  
  }
}
,{
  command:"vivek sir favourite colour",
  callback:(colour)=>{
    document.body.style.background ="pink";
     document.body.style.color="black"
  }
}
,

{
  command:"change colour to *",
  callback:(colour)=>{
    document.body.style.background =colour;
    
  }
}

]


const {transcript,listening,resetTranscript} = useSpeechRecognition({commands});
    //  set(transcript)
  
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
      return null;
    }
  


    return (
      <div>
        
        <button  onClick={SpeechRecognition.startListening}><span class="material-symbols-outlined">
mic
</span></button>
        {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
        <button onClick={resetTranscript}><span  class="material-symbols-outlined">
mic_off
</span></button>
       
        <p>{transcript}</p>
      </div>
    );
  };
  export default Dictaphone;