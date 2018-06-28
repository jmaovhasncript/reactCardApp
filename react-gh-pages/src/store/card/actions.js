import * as types from './types';

function loadCardSucess(card){
    return { type: types.CREATE_CARD, card}
}

export default loadCardSucess;