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
        <div className='FlashCard'>
            <div className='inner'>
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