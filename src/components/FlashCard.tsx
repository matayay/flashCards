import { FC } from 'react';
import flashcards from './Cards';
import '../stylesheets/FlashCard.css';

interface Props {
    flascard: number;
    flip: string;
    speed: string;
    controlFlip: () => void;
};

const FlashCard:FC<Props> = (props) => {
    const innerStyles = {
        transform: props.flip,
        transition: props.speed
    };

    return (
        <div className='FlashCard' onClick={props.controlFlip}>
            <div className='inner' style={innerStyles}>
                <div className='front'>
                    <h3>{flashcards[props.flascard][0]}</h3>
                </div>
                <div className='back'>
                    <h3>{flashcards[props.flascard][1]}</h3>
                </div>
            </div>
        </div>
    )
};

export default FlashCard;