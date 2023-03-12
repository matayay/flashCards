import '../stylesheets/Header.css'
import { FC } from 'react';

interface Props {
    currentStreak: number;
    longestStreak: number;
};

const Header:FC<Props> = (props) => {
    return (
        <div className="Header">
            <h1>The Ultimate Space Quiz</h1>
            <h2>Test your knowledge on space!</h2>
            <h3>Cards: 10</h3>
            <div className='streaks'>
                <h3>Current Streak: {props.currentStreak}</h3>
                <h3>Longest Streak: {props.longestStreak}</h3>
            </div>
        </div>
    )
};

export default Header;