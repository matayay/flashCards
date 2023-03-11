import '../stylesheets/CardButtons.css';
import { FC } from 'react';

interface Props {
    forward: () => void;
    backward: () => void;
}

const CardButtons:FC<Props> = (props) => {
    return (
        <div className="CardButtons">
            <button onClick={props.backward}>&larr;</button>
            <button onClick={props.forward}>&rarr;</button>
        </div>
    )
};

export default CardButtons;