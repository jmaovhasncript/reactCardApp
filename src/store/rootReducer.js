import { combineReducers } from 'redux';
import card from './card/reducer';
export const rootReducer = combineReducers({
     card : card
})