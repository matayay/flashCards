import { FC } from 'react';
import flashcards from './Cards';
import Guess from './Guess';
import '../stylesheets/FlashCard.css';

interface Props {
    borderColor: string;
    flascard: number;
    flip: string;
    speed: string;
    currentStreak: number;
    longestStreak: number;
    controlFlip: () => void;
    setBorderColor: (A: string) => void; 
    setCurrentStreak: (A: number) => void;
    setLongestStreak: (A: number) => void;
};

const FlashCard:FC<Props> = (props) => {
    const innerStyles = {
        transform: props.flip,
        transition: props.speed
    };

    return (
        <div className='FlashCard'>
            <div className='card' onClick={props.controlFlip}>
                <div className='inner' style={innerStyles}>
                    <div className='front' style={{backgroundColor: flashcards[props.flascard][2]}}>
                        <h3>{flashcards[props.flascard][0]}</h3>
                    </div>
                    <div className='back' style={{backgroundColor: flashcards[props.flascard][2]}}>
                        <h3>{flashcards[props.flascard][1]}</h3>
                    </div>
                </div>
            </div>

            <Guess 
                flascard={props.flascard} 
                speed={props.speed} 
                borderColor={props.borderColor} 
                setBorderColor={props.setBorderColor} 
                currentStreak={props.currentStreak}
                longestStreak={props.longestStreak}
                setCurrentStreak={props.setCurrentStreak}
                setLongestStreak={props.setLongestStreak}
            />
        </div>
    )
};

export default FlashCard;