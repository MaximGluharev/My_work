import React, { useContext, useEffect, useRef, useState, } from "react";
import { NavLink } from "react-router-dom";
import Store from "../../../context";
import stylesAll from "./../../../App.module.css"
import styles from "./AppGames.module.css"



const WriteIt = ({setWordIndex, wordIndex, library, points, setPoints}) => {
    const input = useRef()
    const data = useContext(Store)
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() - 0.5))
    

    console.log(data.cookie)

    useEffect (() => {
        if (data.correctWords) {
            setPoints(points + 1)
            data.setCookie('points', points + 1)
    }}, [data.correctWords])

    const speak = (word) => {
        const speakInstance = new SpeechSynthesisUtterance(word)
        speakInstance.voice = speechSynthesis.getVoices()[6]
        speechSynthesis.speak(speakInstance)

    }

    const checkWord = (event) => {
        event.preventDefault()
        if (input.current.value === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if (wordIndex !== data.playWords.length -1) {
                setWordIndex(wordIndex + 1)
            } else {
                alert ("Game is over")
            }
            input.current.value = ''

        } else {
            data.setErrorWords(data.errorWords + 1)
        }

    } 


    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * (wordIndex+1)}vw`
    
    }
   
    return (
        <div>
            <div className={stylesAll.progressBarContainer}>
                <div className={stylesAll.progressBar} style={progressBarWidth}></div>
            </div>

            
            
            <nav className={stylesAll.gameNav}>
                <NavLink className={stylesAll.btnBack} to={"/games"}>

                </NavLink>

                <ul className={stylesAll.results}>
                    <li>Errors: {data.errorWords} </li>
                    <li>Correct: {data.correctWords} </li>
                    <li>Points: {points} </li>


                </ul>
            
            </nav>



        <section>
            <span>write a traslation for this word</span>
            <h3>{randomWords[wordIndex].word}</h3>

           <form onSubmit={checkWord} className={styles.writeWordBlock}>
                <input ref={input} type="text"/>

                <button className={styles.btnOk}>OK</button>
           </form>

        </section>


        </div>

        
    ) 
}
export default WriteIt;