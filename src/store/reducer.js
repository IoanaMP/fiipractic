import * as actionTypes from './actions'

const initialState = {
    counter : 0,
    allArticles : [],
    isUserAuth : false
}

export const reducer = (state = initialState, action) =>{
    if(action.type === actionTypes.INCREMENT){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter : state.counter - action.value
        }
    }
    return state
}