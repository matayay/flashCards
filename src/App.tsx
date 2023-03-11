import Header from './components/Header'
import FlashCard from './components/FlashCard';
import CardButtons from './components/CardButtons';
import { useState } from 'react'
import './stylesheets/App.css'

const App = () => {
    const [speed, setSpeed] = useState("0.8s");

    const [flip, setFlip] = useState("none");
    const controlFlip = () => {
        if (flip == "none")
        {
            setFlip("rotateY(180deg)");
        }

        else
        {
            setFlip("none");
        }

        setSpeed("0.8s");
    };

    const [card, setCard] = useState(0);
    const forward = () => {
        if (card != 9)
        {
            setCard(card + 1);
            setFlip("none");
            setSpeed("0s");
        }
    };

    const backward = () => {
        if (card != 0)
        {
            setCard(card - 1);
            setFlip("none");
            setSpeed("0s");
        }
    };

    return (
        <div className='App'>
            <Header />
            <FlashCard flascard={card} flip={flip} speed={speed} controlFlip={controlFlip} />
            <CardButtons forward={forward} backward={backward} />
        </div>
    )
};

export default App;