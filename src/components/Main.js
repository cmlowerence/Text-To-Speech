import { faCirclePlay, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faCancel, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


function Main(props) {
  const [utteranceTxt, setUtteranceTxt] = useState("");


  // * JS functions for functionalities of the buttons
  const speak = (utterance) => {
    let voices = speechSynthesis.getVoices()
    let voiceArr = [];
    for (let i=0;i<voices.length;i++){
      voiceArr= [...voiceArr, `Voice index: ${i}\nVoice name: ${voices[i].name}\nVoice language: ${voices[i].lang} \n\n`]
    }
    let __utterance__ = new SpeechSynthesisUtterance(utterance)
    __utterance__.voice = voices.filter(e=>e.lang==='en_US' || e.lang === 'en-US')[0]
    speechSynthesis.speak(__utterance__)
    
    
  };
  const reset = () => {
    console.log("Reset button triggered");
    setUtteranceTxt("");
    speechSynthesis.cancel();
  };

  return (
    <main className={`main --hue_theme-${props.theme}`}>
      <h1 className='welcomeHeading'> Hello There... </h1>
      <div className='contentContainer'>
        <span className='contentTextarea'>
          <textarea
            name='para'
            id='para'
            placeholder='Your Text Here...'
            onInput={(event) => setUtteranceTxt(event.target.value)}
            value={utteranceTxt}
          ></textarea>
        </span>
        <span className='functionButtons'>
          <button className='funcBtn-1' tabIndex={0} onClick={() => reset()}>
            Reset <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            className='funcBtn-2'
            tabIndex={0}
            onClick={() => utteranceTxt ? speak(utteranceTxt) : speak("Please Enter some text first.")}
          >
            Play <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button
            className='funcBtn-3'
            tabIndex={0}
            onClick={() => speechSynthesis.cancel()}
          >
            Stop <FontAwesomeIcon icon={faCancel} />
          </button>
          <label htmlFor='txt_file' className='funcBtn-3' tabIndex={0}>
            Input Text File <FontAwesomeIcon icon={faFileAlt} />
            <input
              type='file'
              name='input_file'
              id='input_file'
              onInput={(e) => {
                const input = e.target;
                input.value
                  ? input.classList.add("file_selected")
                  : input.classList.remove("file_selected");
              }}
            />
          </label>
        </span>
      </div>
    </main>
  );
}

export default Main;





// import { useSpeech } from "react-text-to-speech";
// import { faCirclePlay, faFileAlt } from "@fortawesome/free-regular-svg-icons";
// import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";

// function Main(props) {
//   const { Text, speechStatus, start, pause, stop } = useSpeech({ text: "This library is awesome!" });
//   const [utteranceTxt, setUtteranceTxt] = useState("");

//   const reset = () => {
//     console.log("Reset button triggered");
//     setUtteranceTxt("");
//   };

//   return (
//     <main className={`main --hue_theme-${props.theme}`}>
//       <h1 className='welcomeHeading'> Hello There... </h1>
//       <div className='contentContainer'>
//         <span className='contentTextarea'>
//           <textarea
//             name='para'
//             id='para'
//             placeholder='Your Text Here...'
//             onInput={(event) => setUtteranceTxt(event.target.value)}
//             value={utteranceTxt}
//           ></textarea>
//         </span>
//         <span className='functionButtons'>
//           <button className='funcBtn-1' tabIndex={0} onClick={() => reset()}>
//             Reset <FontAwesomeIcon icon={faRotateLeft} />
//           </button>
//           <button
//             className='funcBtn-2'
//             tabIndex={0}
//             onClick={() => utteranceTxt ? speak({ text: utteranceTxt }) : speak({ text: "Please Enter some text first." })}
//           >
//             Play <FontAwesomeIcon icon={faCirclePlay} />
//           </button>
//           <Text/>
//           {/* Your Input File button goes here */}
//         </span>
//       </div>
//     </main>
//   );
// }

// export default Main;
