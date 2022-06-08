import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/card_reducer'
import {
  ADD_TO_CARD,
  SORT_CARD_LOWEST,
  SORT_CARD_HIGHEST,
  REMOVE_CARD_ITEM,
  CLEAR_ALL,
} from '../actions'



const getSessionStorage = () => {
  let cards = sessionStorage.getItem('cards');
  if(cards) {
    return JSON.parse(sessionStorage.getItem('cards'))
  } else {
    return []
  }
}

const initialState = {
  cards: getSessionStorage()
}
const CardsContext = React.createContext()

export const CardProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)


  
  //  add to card
  const addToCard = () => {
    dispatch({type:ADD_TO_CARD})
  }

  // remove item
  const removeItem = (id) => {
    dispatch({type:REMOVE_CARD_ITEM, payload:id})
  }

  // sort cards
  const sortCardLowest = () => {
    dispatch({type:SORT_CARD_LOWEST})
  }

  const sortCardHighest = () => {
    dispatch({type:SORT_CARD_HIGHEST})
  }

  // clear all
  const clearAll = () => {
    dispatch({type:CLEAR_ALL})
  }
  useEffect(()=>{
    sessionStorage.setItem('cards', JSON.stringify(state.cards))
  },[state])
  

  return (
    <CardsContext.Provider value={{...state,addToCard,removeItem,sortCardLowest,sortCardHighest,clearAll}}>{children}</CardsContext.Provider>
  )
}
// make sure use
export const useCardContext = () => {
  return useContext(CardsContext)
}