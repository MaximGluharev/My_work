import React from "react";
import styles from "./Games.module.css"
import { NavLink } from "react-router-dom";
import imgCheckCorrect from "../../assets/img/check-the-correct-one.svg"
import imgSelectTranslation from "../../assets/img/select-translation.svg"
import imgSprintGuess from "../../assets/img/sprint-guess.svg"
import imgPutTranslation from "../../assets/img/put-translation.svg"
import imgSpeakAndCheck from "../../assets/img/speak-and-check.svg"
import imgListenSprint from "../../assets/img/listen-sprint.svg"
import imgRememberTranslation from "../../assets/img/remember-translation.svg"
import imgWriteTranslation from "../../assets/img/write-translation.svg"
import imgListenAndGuess from "../../assets/img/listen-and-guess.svg"




const Games = ({library}) => {
    

    const GAMES = [
        {img: imgCheckCorrect, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgWriteTranslation, path: "write-it", name: "write correct word", description: "write correct word"},
        {img: imgSelectTranslation, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgSprintGuess, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgPutTranslation, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgSpeakAndCheck, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgListenSprint, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgRememberTranslation, path: "check-it", name: "Check correct word", description: "Check correct word"},
        {img: imgListenAndGuess, path: "check-it", name: "Check correct word", description: "Check correct word"}


    ]



    

   
    return (
        
       

        <section className={styles.gameContainer}>
            {GAMES.map((game, index) => (
                <NavLink key={index} to={"game/" + game.path}>
                    <div className={styles.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>

                        </div>

                        <img src={game.img} alt="#"/>
                    </div>
                </NavLink>

            ))}
        </section>

           
    ) 
}
export default Games;