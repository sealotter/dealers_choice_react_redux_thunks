
import {createStore} from 'redux'

const initialState = {
    breweries : []

}

const SET_BREWS = 'SET_BREWS'
const ADD_BREWS = 'ADD_BREWS'
const SANS_BREW = 'SANS_BREW'


const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case SET_BREWS : 
            return state = {...state, breweries: action.breweries};
        case ADD_BREWS : 
            const brews = [ ...state.breweries, action.brewery ];
            return state = {...state, breweries: brews};
        case SANS_BREW : 
            const brew = state.breweries.filter(brew => brew.id !== action.brewery.id)
            return state = {...state, breweries:brew}
            
        default :  
            return state  
    }
    
}

const store = createStore(reducer);


export default store;