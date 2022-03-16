import {createStore} from 'redux'
// const state = {
//     breweries : []

// }
const SET_BREWS = 'SET_BREWS'

const reducer = (state = {breweries: []}, action) => {
    switch(action.type) {
        case SET_BREWS : 
            return 
    }
    return state

}

const store = createStore(reducer);


export default store;