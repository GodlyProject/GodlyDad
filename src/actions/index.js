//http://quotes.rest/bible/verse.json
import Axios from 'axios'
// action Type
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE'
export const SET_QUOTE_SUCCESS = 'SET_QUOTE_SUCCESS'
// action creator
export const getQuote = () => (dispatch) => {
    dispatch({type: SET_FETCHING_QUOTE})
    Axios.get('http://quotes.rest/bible/verse.json')
        .then(res => {
            console.log('res', res.data)
            dispatch({type: SET_QUOTE_SUCCESS, payload: res.data})
        })
}