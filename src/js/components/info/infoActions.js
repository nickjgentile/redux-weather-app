import axios from 'axios';

export default (city) => ({
    type: 'GET_WEATHER',
    meta: { city },
    payload: axios.get(
        'http://api.openweathermap.org/data/2.5/weather?APPID=c803006286596219e500ae5a7afe68a7&units=imperial&q=' + city,
    ).then(axiosResponse => axiosResponse.data)
  });