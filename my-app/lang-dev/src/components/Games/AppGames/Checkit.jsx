import React, { useEffect, useMemo, useState, useContext } from "react";
import Store from "../../../context";
import { NavLink } from "react-router-dom";
import stylesAll from "./../../../App.module.css"
import styles from "./AppGames.module.css"









const Checkit = ({setWordIndex, wordIndex, library, points, setPoints}) => {
    
    const data = useContext(Store)

    console.log (data)
    
    const randomWords = useMemo(() => data.playWords.sort(() => Math.random() - 0.5), [])

    const [currentWords, setCurrentWords] = useState([])

    useEffect (() => {
        setCurrentWords([
            randomWords[wordIndex].word,
            randomWords[(wordIndex + 1)%randomWords.length].word,
            randomWords[(wordIndex + 2)%randomWords.length].word
            

        ].sort(() => Math.random() - 0.5))
        if (data.correctWords) {
            setPoints(points + 1)
            data.setCookie('points', points + 1)
    }}, [data.correctWords])

    const speak = (word) => {
        const speakInstance = new SpeechSynthesisUtterance(word)
        speakInstance.voice = speechSynthesis.getVoices() [6]
        speechSynthesis.speak(speakInstance)

    }

    const checkWord = (word) => {
        if (word === randomWords[wordIndex].word) {
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if (wordIndex !== data.playWords.length -1) {
                setWordIndex(wordIndex + 1)
            } else {
                alert ("Game is over")
            }
            

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
            <span>Check a traslation for this word</span>
            <h3>{randomWords[wordIndex].translate}</h3>
            <ul className={styles.btnContainer}>
                {currentWords.map((word, index) => (
                    <li key={word.toString()} className={styles.btnCheck} onClick={() => checkWord(word)}>{word}</li>
                ))}
            </ul>

           

        </section>


        </div>

        
    ) 
}
export default Checkit;