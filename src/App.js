import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Timer from './Components/Timer/Timer';
import Stats from './Components/Stats/Stats';
import Title from './Components/Title/Title';
import Gameboard from './Components/Gameboard/Gameboard';
import Fragment from './hoc/Fragment/Fragment';
import classes from './Components/Background/Background.css';
import {setCurrentLevel} from './redux/level/level.actions';

import BuildDeck from './BuildDeck';

function App() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setCards(BuildDeck())
    }, []);

    const sameCardClicked = (id) => flipped.includes(id);

    const isMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id);
        const flippedCard = cards.find((card) => flipped[0] === card.id);
        return flippedCard.type === clickedCard.type
    };

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    };

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped((flipped) => [...flipped, id])
            setDisabled(false)
        } else {
            if (sameCardClicked(id)) {
                setDisabled(false);
                return;
            }
            setFlipped((flipped) => [...flipped, id])
            if (isMatch(id)) {
                setSolved([...solved, ...flipped, id])
                resetCards()
            } else {
                setTimeout(resetCards, 1000)
            }
        }
    };

        return (
            <Fragment>
                <div className={classes.mainboard}>
                    <Stats/>
                    <Timer/>
                    <Title/>
                    <Gameboard
                        cards={cards}
                        flipped={flipped}
                        handleClick={handleClick}
                        disabled={disabled}
                        solved={solved}
                    />
                    {/*<Gameboard/>*/}
                </div>
            </Fragment>
        )
    }

    const mapDispatchToProps = dispatch => ({
        setCurrentLevel: level => dispatch(setCurrentLevel(level))
    });

export default connect(null, mapDispatchToProps)(App);