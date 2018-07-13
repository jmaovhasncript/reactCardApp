
import initialState from '../initialState';
import * as types from './types';


export default function CardReducer(state = initialState.cards, action) {
    switch (action.type) {
      case types.CREATE_CARD:
        return {
          ...state,
          cards: JSON.parse(action.card),
          itemsIsLoading : false
        } 
      case 'ITEMS_IS_LOADING':
          return {
            itemsIsLoading: action.isLoading
          };
      default:
        return state
    }
  }