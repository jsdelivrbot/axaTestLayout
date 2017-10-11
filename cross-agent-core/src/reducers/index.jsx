import { combineReducers } from 'redux';
import LayoutReducer from './reducer-layout'

const rootReducer = combineReducers({
    layout: LayoutReducer
});

export default rootReducer;