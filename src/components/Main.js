// import React, { useState } from "react";
// import {
//   faCirclePlay,
//   faFileAlt,
//   faCancel,
//   faRotateLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Main(props) {
//   const [utteranceTxt, setUtteranceTxt] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);

//   const speak = (utterance) => {
//     let voices = speechSynthesis.getVoices();
//     let voiceArr = [];
//     for (let i = 0; i < voices.length; i++) {
//       voiceArr = [
//         ...voiceArr,
//         `Voice index: ${i}\nVoice name: ${voices[i].name}\nVoice language: ${voices[i].lang} \n\n`,
//       ];
//     }
//     let __utterance__ = new SpeechSynthesisUtterance(utterance);
//     __utterance__.voice = voices.filter(
//       (e) => e.lang === "en_US" || e.lang === "en-US"
//     )[0];
//     speechSynthesis.speak(__utterance__);
//     setIsPlaying(speechSynthesis.speaking);
//   };

//   const reset = () => {
//     console.log("Reset button triggered");
//     setUtteranceTxt("");
//     speechSynthesis.cancel();
//     setIsPlaying(false);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.name.endsWith(".txt")) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const fileContent = event.target.result;
//         setUtteranceTxt(fileContent);
//       };
//       reader.readAsText(file);
//     } else {
//       e.target.value = "";
//       setUtteranceTxt("");
//     }
//   };

//   return (
//     <main className={`main --hue_theme-${props.theme}`}>
//       <h1 className="welcomeHeading">Hello There...</h1>
//       <div className="contentContainer">
//         <span className="contentTextarea">
//           <textarea
//             name="para"
//             id="para"
//             placeholder="Your Text Here..."
//             value={utteranceTxt}
//             onChange={(event) => setUtteranceTxt(event.target.value)}
//           ></textarea>
//         </span>
//         <span className="functionButtons">
//           <button
//             className="funcBtn-1"
//             tabIndex={0}
//             onClick={() => reset()}
//           >
//             Reset <FontAwesomeIcon icon={faRotateLeft} />
//           </button>
//           <button
//             className={isPlaying ? "funcBtn-2 active" : "funcBtn-2"}
//             tabIndex={0}
//             onClick={() =>
//               utteranceTxt
//                 ? speak(utteranceTxt)
//                 : speak("Please Enter some text first.")
//             }
//           >
//             Play <FontAwesomeIcon icon={faCirclePlay} />
//           </button>
//           <button
//             className="funcBtn-3"
//             tabIndex={0}
//             onClick={() => {
//               speechSynthesis.cancel();
//               setIsPlaying(false);
//             }}
//           >
//             Stop <FontAwesomeIcon icon={faCancel} />
//           </button>
//           <label htmlFor="input_file" className="funcBtn-3" tabIndex={0}>
//             Input Text File <FontAwesomeIcon icon={faFileAlt} />
//             <input
//               type="file"
//               id="input_file"
//               accept=".txt"
//               onChange={handleFileChange}
//             />
//           </label>
//         </span>
//       </div>
//     </main>
//   );
// }

// export default Main;
import React, { useState } from "react";
import {
  faCirclePlay,
  faFileAlt,
  faCancel,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main(props) {
  const [utteranceTxt, setUtteranceTxt] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1); // Default speed

  const speak = (utterance) => {
    speechSynthesis.cancel(); // Stop current speech
    let voices = speechSynthesis.getVoices();
    let voiceArr = [];
    for (let i = 0; i < voices.length; i++) {
      voiceArr = [
        ...voiceArr,
        `Voice index: ${i}\nVoice name: ${voices[i].name}\nVoice language: ${voices[i].lang} \n\n`,
      ];
    }
    let __utterance__ = new SpeechSynthesisUtterance(utterance);
    __utterance__.voice = voices.filter(
      (e) => e.lang === "en_US" || e.lang === "en-US"
    )[0];
    __utterance__.rate = speed; // Set speech speed
    speechSynthesis.speak(__utterance__);
    setIsPlaying(speechSynthesis.speaking);
  };

  const reset = () => {
    console.log("Reset button triggered");
    setUtteranceTxt("");
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        setUtteranceTxt(fileContent);
      };
      reader.readAsText(file);
    } else {
      e.target.value = "";
      setUtteranceTxt("");
    }
  };

  return (
    <main className={`main --hue_theme-${props.theme}`}>
      <h1 className='welcomeHeading'>Hello There...</h1>
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
            className={isPlaying ? "funcBtn-2 active" : "funcBtn-2"}
            tabIndex={0}
            onClick={() =>
              utteranceTxt
                ? speak(utteranceTxt)
                : speak("Please enter some text first.")
            }
          >
            Play <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button
            className='funcBtn-3'
            tabIndex={0}
            onClick={() => {
              speechSynthesis.cancel();
              setIsPlaying(false);
            }}
          >
            Stop <FontAwesomeIcon icon={faCancel} />
          </button>
          <label htmlFor='input_file' className='funcBtn-3' tabIndex={0}>
            Input Text File <FontAwesomeIcon icon={faFileAlt} />
            <input
              type='file'
              id='input_file'
              accept='.txt'
              onChange={handleFileChange}
            />
          </label>
          <span className='speech-rate' tabIndex={1}>
            <select
              id="speech-rate"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
            >
              <option className='speech-rate-option' value={0.5}>
                0.5x
              </option>
              <option className='speech-rate-option' defaultChecked value={1}>
                1x
              </option>
              <option className='speech-rate-option' value={1.5}>
                1.5x
              </option>
              <option className='speech-rate-option' value={2}>
                2x
              </option>
            </select>
          </span>
        </span>
      </div>
    </main>
  );
}

export default Main;
