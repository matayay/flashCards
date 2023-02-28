import Header from './components/Header'
import FlashCard from './components/FlashCard';
import { useState } from 'react'
import './stylesheets/App.css'

const App = () => {
    const [flipped, setFlipped] = useState(0);
    const updateFlipped = () => {
        if (flipped == 1)
        {
            setFlipped(0);
        }

        else
        {
            setFlipped(1);
        }
    };

    const [card, setCard] = useState(0);
    const setFlashCard = () => {
        setCard(Math.floor(Math.random() * 10))
        setFlipped(0);
    };

    return (
        <div className='App'>
            <Header />
            <FlashCard flascard={card} flipped={flipped} updateFlipped={updateFlipped} />
            <button onClick={setFlashCard}>New</button>
        </div>
    )
};

export default App;