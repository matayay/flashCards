import { FC } from 'react';
import flashcards from './Cards';
import '../stylesheets/FlashCard.css';

interface Props {
    flascard: number;
    flipped: number;
    updateFlipped: () => void;
};

const FlashCard:FC<Props> = (props) => {
    return (
        <div className='FlashCard' onClick={props.updateFlipped}>
            <h3>{flashcards[props.flascard][props.flipped]}</h3>
        </div>
    )
};

export default FlashCard;