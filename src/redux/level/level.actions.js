import LevelActionTypes from './level.types';

export const setCurrentLevel = level => ({
    type: LevelActionTypes.SET_CURRENT_LEVEL,
    payload: level
});