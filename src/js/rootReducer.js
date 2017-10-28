import { combineReducers } from 'redux';
import historyReducer from './components/history/historyReducer';
import infoReducer from './components/info/infoReducer';
import searchReducer from './components/searchbar/searchReducer';

const rootReducer = combineReducers({
    history: historyReducer,
    info: infoReducer,
    search: searchReducer
});

export default rootReducer;
