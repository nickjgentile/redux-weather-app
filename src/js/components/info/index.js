import Info from './Info';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        cityName: store.info.cityName,
        temp: store.info.temp,
        pressure: store.info.pressure,
        humidity: store.info.humidity,
        low: store.info.low,
        high: store.info.high,
        windSpeed: store.info.windSpeed
    }
}

export default connect(mapStoreToProps)(Info);