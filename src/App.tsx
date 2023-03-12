import Header from './components/Header'
import FlashCard from './components/FlashCard';
import CardButtons from './components/CardButtons';
import { useState } from 'react'
import './stylesheets/App.css'

const App = () => {
    const [speed, setSpeed] = useState("0s");
    const [flip, setFlip] = useState("none");
    const [card, setCard] = useState(0);
    const [borderColor, setBorderColor] = useState("gray");
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    
    const controlFlip = () => {
        if (flip == "none")
        {
            setFlip("rotateX(180deg)");
        }

        else
        {
            setFlip("none");
        }

        setSpeed("0.5s");
    };

    const forward = () => {
        if (card != 9)
        {
            setCard(card + 1);
            setFlip("none");
            setSpeed("0s");
            setBorderColor("gray");
        }
    };

    const backward = () => {
        if (card != 0)
        {
            setCard(card - 1);
            setFlip("none");
            setSpeed("0s");
            setBorderColor("gray");
        }
    };

    return (
        <div className='App'>
            <Header currentStreak={currentStreak} longestStreak={longestStreak} />
            <FlashCard 
                flascard={card} 
                flip={flip} speed={speed} 
                controlFlip={controlFlip} 
                borderColor={borderColor} 
                setBorderColor={setBorderColor}
                currentStreak={currentStreak}
                longestStreak={longestStreak}
                setCurrentStreak={setCurrentStreak}
                setLongestStreak={setLongestStreak}
            />
            <CardButtons forward={forward} backward={backward} />
        </div>
    )
};

export default App;