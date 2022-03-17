import React from "react";
import {connect} from "react-redux";
import axios from "axios";

const Breweries = ({breweries, destroy}) => {
    return (
        <ul>
            {breweries.map(brewery => {
                return (
                <li key = { brewery.id }>
                    { brewery.name }
                    <button onClick={() => destroy(brewery)}>-</button>
                </li>
                )
            })}
        </ul>
    )
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatch = (dispatch) => {
    return {
        destroy : async(brewery) => {
            await axios.delete(`/api/breweries/${brewery.id}`)
            dispatch({type:"SANS_BREW", brewery})
        }
    }
}

export default connect(mapStateToProps,mapDispatch)(Breweries)