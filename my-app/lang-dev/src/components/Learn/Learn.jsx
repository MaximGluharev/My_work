import React from "react";
import styles from "./../../App.module.css"
import { useState } from 'react/cjs/react.development';
import { useEffect } from "react";


const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[6]
    speechSynthesis.speak(speakInstance)

}


const Learn = ({library}) => {
    useEffect(() => {
        speak(library[wordIndex].translate)

    })

    const [wordIndex, setWordIndex] = useState(0);

    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * (wordIndex+1)}vw`
    
    }

   
    return (
        
        <div>
             <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={progressBarWidth}></div>
            </div>

            <section>
                <span>{library[wordIndex].word}</span>
                <h3>{library[wordIndex].translate}</h3>
                
            </section>

           

            <div onClick={() => {
                if(wordIndex === library.length -1) { 
                    setWordIndex(0)
                } else {
                    
                    setWordIndex(wordIndex + 1)
                }
                
            }} className={styles.btnNext}>

            </div>


            
        </div> 
    

        


    



    ) 
}


export default Learn;
