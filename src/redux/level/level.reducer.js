const INITIAL_STATE = {
    currentLevel: "Daytona Driver/Driver"
};

const levelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_LEVEL':
            return {
                ...state,
                currentLevel: action.payload
            };
        default:
            return state;
    }
};

export default levelReducer;