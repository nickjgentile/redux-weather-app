import Searchbar from './Searchbar';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        searchInput: store.search.searchInput
    }
}

export default connect(mapStoreToProps)(Searchbar);