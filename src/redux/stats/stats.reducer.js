import StatsActionTypes from './stats.types';

const INITIAL_STATE = {
    matches: 0, //cartItems
    attempts: 0,
    accuracy: 0,
    wins: 0
};

const statsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StatsActionTypes.MATCH_COUNTER: //CATypes.
            return {//return: matches + 1
                ...state,
                matches: action.payload  //cartItems:
            };
        case StatsActionTypes.ATTEMPTS_COUNTER:
            return {
                ...state,
                attempts: action.payload
            };
        case StatsActionTypes.ACCURACY_CALCULATOR:
            return {
                ...state,
                accuracy: action.payload
            };
        case StatsActionTypes.WINS_COUNTER:
            return {
                ...state,
                wins: action.payload
            };
        default:
            return state;
    }
};

export default statsReducer;