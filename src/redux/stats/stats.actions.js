import StatsActionTypes from './stats.types';

export const matchCounter = matchCount => ({  //addItem = item
    type: StatsActionTypes.MATCH_COUNTER,
    payload: matchCount  //payload: item
});

export const attemptsCounter = attemptsCount => ({
    type: StatsActionTypes.ATTEMPTS_COUNTER,
    payload: attemptsCount
});

export const accuracyCalculator = accuracyCalc => ({
    type: StatsActionTypes.ACCURACY_CALCULATOR,
    payload: accuracyCalc
});

export const winsCounter = winsCount => ({
    type: StatsActionTypes.WINS_COUNTER,
    payload: winsCount
});