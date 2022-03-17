import axios from "axios";
import React from "react";
import {connect} from "react-redux"

         
const Add = ({add}) => {
    return(
        <button onClick={ add }>add more</button>      
    )
}

const mapDispatch = (dispatch) => { 
    return {
        add : async() => {
            const res = await axios.post('/api/breweries')
            dispatch({type: "ADD_BREWS", brewery: res.data })
            
        }
    }
}

export default connect(null, mapDispatch)(Add)