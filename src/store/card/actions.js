import * as types from './types';

function loadCardSucess(card){
    console.log("actions is called");
    return { type: types.CREATE_CARD, card}
}

export default loadCardSucess;