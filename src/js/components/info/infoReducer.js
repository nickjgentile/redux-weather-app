const initialState = {
    cityName: 'Search For Weather By City Name',
    temp: null,
    pressure: null,
    humidity: null,
    low: null,
    high: null,
    windSpeed: null
};

export default function infoReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED':
            return {
                ...state,
                cityName: 'The Weather In ' + payload.name,
                temp: payload.main.temp,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                low: payload.main.temp_min,
                high: payload.main.temp_max,
                windSpeed: payload.wind.speed
            }
        case 'GET_WEATHER_PENDING':
            return {
                ...state,
                cityName: 'Loading City...'
            }
        case 'GET_WEATHER_REJECTED':
            return {
                ...state,
                cityName: "You input an invalid city name!"
            }
        default:
            return state;
    }
}