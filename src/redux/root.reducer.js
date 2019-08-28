import {combineReducers} from 'redux';

import levelReducer from './level/level.reducer';
import statsReducer from './stats/stats.reducer';

export default combineReducers({
    level: levelReducer,
    stats: statsReducer
});