import axios from "axios";
import React from "react";
import store from "./store";


const add = async() => {
    const res = await axios.post('/api/breweries')
    store.dispatch({type: "ADD_BREWS", brewery: res.data })

}
              
const Add = () => {
    return(
        <button onClick={ add }>add more</button>
        
    )
}

export default Add