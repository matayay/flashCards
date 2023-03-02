import Header from './components/Header'
import FlashCard from './components/FlashCard';
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

    const [card, setCard] = useState(Math.floor(Math.random() * 10));
    const setFlashCard = () => {
        setCard(Math.floor(Math.random() * 10)) 
        setFlip("none");
        setSpeed("0s");
    };

    return (
        <div className='App'>
            <Header />
            <FlashCard flascard={card} flip={flip} speed={speed} controlFlip={controlFlip} />
            <button onClick={setFlashCard}>Next</button>
        </div>
    )
};

export default App;