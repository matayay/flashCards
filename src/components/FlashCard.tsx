import { FC } from 'react';
import Cards from './Cards';
import '../stylesheets/FlashCard.css';

interface Props {
    flascard: number;
    flipped: number;
    updateFlipped: () => void;
};

const FlashCard:FC<Props> = (props) => {
    const flashcards = 
    [Cards.one, Cards.two, Cards.three, Cards.four, Cards.five, 
    Cards.six, Cards.seven, Cards.eight, Cards.nine, Cards.ten]

    return (
        <div className='FlashCard' onClick={props.updateFlipped}>
            <h3>{flashcards[props.flascard][props.flipped]}</h3>
        </div>
    )
};

export default FlashCard;