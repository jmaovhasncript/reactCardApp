import cards from './data';
import loadCardSucess from './card/actions';
export function GetCard() {
    console.log("GetCard is called ");
    return dispatch =>{
        console.log("dispatch data");
        dispatch(loadCardSucess(cards))
        }
      
  }

