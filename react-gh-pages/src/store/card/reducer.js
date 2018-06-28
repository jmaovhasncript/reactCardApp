/**
* Blog Reducer
*/
import initialState from '../initialState';
import * as types from './types';


export default function CardReducer(state = initialState.cards, action) {
    switch (action.type) {
      case types.CREATE_CARD:
        return {
          ...state,
          cards: action.card
        } 
      default:
        return state
    }
  }