import React, {useState, useEffect} from 'react';

import Timer from './Components/Timer/Timer';
import Stats from './Components/Stats/Stats';
import Title from './Components/Title/Title';
import Gameboard from './Components/Gameboard/Gameboard';
import Fragment from './hoc/Fragment/Fragment';
import classes from './Components/Background/Background.css';

import BuildDeck from './BuildDeck';

export default function App() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setCards(BuildDeck())
    }, []);

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if (sameCardClicked(id)) return
            setFlipped([flipped[0], id])
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                resetCards()
            } else {
                setTimeout(resetCards, 500)
            }
        }
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }
    const sameCardClicked = id => flipped.includes(id);

    const isMatch = id => {
        const clickedCard = cards.find(card => card.id === id);
        const flippedCard = cards.find(card => flipped[0] === card.id);
        return flippedCard.type === clickedCard.type
    }

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

//export default App;