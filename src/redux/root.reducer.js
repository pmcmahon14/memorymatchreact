import {combineReducers} from 'redux';

import levelReducer from './level/level.reducer';

export default combineReducers({
    level: levelReducer
});