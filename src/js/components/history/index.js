import History from './History';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        searches: store.history.searches
    }
}

export default connect(mapStoreToProps)(History);