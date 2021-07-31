import { combineReducers } from 'redux';
import CurrentPageReducer from './current_page';

const rootReducer = combineReducers({
  page: CurrentPageReducer,
});

export default rootReducer;
