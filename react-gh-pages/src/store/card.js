import cards from './data';
import loadCardSucess from './card/actions';
export function GetCard() {
    return dispatch =>{
        dispatch(loadCardSucess(cards))
        }
      
  }

