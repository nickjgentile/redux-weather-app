const initialState = {
    searches: []
};

export default function historyReducer( state = initialState, action) {
    const { type, payload } = action;

        switch (type) {
            
            case 'GET_WEATHER_FULFILLED':
                return {
                    ...state,
                    searches: [...state.searches, { name: payload.name, date: new Date().toDateString() }]
                };
            default:
                return state;
        }
}