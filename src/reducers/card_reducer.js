import {
  ADD_TO_CARD,
  SORT_CARD_LOWEST,
  SORT_CARD_HIGHEST,
  REMOVE_CARD_ITEM,
  CLEAR_ALL
} from '../actions'
import { randomId } from '../utils/helpers';
const card_reducer = (state, action) => {

  if (action.type === ADD_TO_CARD) {

    const newItem = {
      cardNumber: Math.floor(Math.random() * 1000) + 1,
      id: randomId(),
    }
    
    return { ...state, cards: [...state.cards, newItem] };
  }
  if (action.type === SORT_CARD_LOWEST) {
    let tempCardLowest = [...state.cards];
    
    tempCardLowest = tempCardLowest.sort((a,b)=>{
      if (a.cardNumber < b.cardNumber) {
        return -1 
      }
      if(a.cardNumber > b.cardNumber) {
        return 1
      }
      return 0
    })
    return {...state,cards: tempCardLowest}
  }
  if(action.type === SORT_CARD_HIGHEST) {
    let tempCardHighest = [...state.cards];
    
    tempCardHighest = tempCardHighest.sort((a,b)=>b.cardNumber - a.cardNumber)
    return {...state,cards: tempCardHighest}
  }
  if (action.type === REMOVE_CARD_ITEM) {
    
    const tempCard = state.cards.filter(item => item.id !== action.payload);
    return { ...state, cards: tempCard };
  }
  if (action.type === CLEAR_ALL) {

    return { ...state, cards: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default card_reducer;