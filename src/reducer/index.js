// imports
import {SET_FETCHING_QUOTE, SET_QUOTE_SUCCESS} from '../actions'
//initial state
const initialState = {
    quote: {},
    isFetching: false
}
//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING_QUOTE:
            return {
                ...state,
                isFetching: true
            }
        case SET_QUOTE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                quote: {...action.payload}
            }
        default:
            return state;
    }
}

export default reducer;
