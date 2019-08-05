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

    useEffect(() => {
        setCards(BuildDeck())
    }, [])



    const handleClick = (id) => setFlipped((flipped) => [...flipped, id])

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
                    />
                    {/*<Gameboard/>*/}
                </div>
            </Fragment>
        )
    }

//export default App;