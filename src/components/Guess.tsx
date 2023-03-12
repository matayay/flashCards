import { FC } from "react";
import { useState } from "react";
import flashcards from './Cards';
import '../stylesheets/Guess.css';

interface Props {
    flascard: number;
    speed: string;
    borderColor: string;
    currentStreak: number;
    longestStreak: number;
    setBorderColor: (A: string) => void; 
    setCurrentStreak: (A: number) => void;
    setLongestStreak: (A: number) => void;
};

const Guess:FC<Props> = (props) => {
    const [current, setCurrent] = useState("");

    const handleForm = (event: any) => {
        if (props.speed == "0s")
        {
            if (current.toLowerCase() == flashcards[props.flascard][1].toLowerCase())
            {
                props.setBorderColor("green");
                setCurrent("");
                props.setCurrentStreak(props.currentStreak + 1);
            }

            else
            {
                props.setBorderColor("red");
                setCurrent("");
                props.setCurrentStreak(0);

                if (props.currentStreak > props.longestStreak)
                {
                    props.setLongestStreak(props.currentStreak);
                }
            }
        }

        event.preventDefault();
    };

    return (
        <div className="Guess">
            <form onSubmit={handleForm}>
                <div className="textField">
                    <h4>Guess the answer here:</h4>
                    <input className="textBox" style={{borderColor: props.borderColor}} type="text" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="Place your answer here." />
                </div>
                <input type="submit" value="Guess" />
            </form>
        </div>
    )
};

export default Guess;