const initialState = {
    searchInput: ''
};

export default function searchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case 'UPDATE_INPUT':
            return {
                ...state,
                searchInput: payload.userInput
            }

        case 'GET_WEATHER_FULFILLED':
        case 'GET_WEATHER_PENDING':
            return {
                ...state,
                searchInput: action.meta.city
            }
        default:
            return state;
    }
}