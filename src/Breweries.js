import React from "react";
import { ReactDOM } from "react-dom";
import store from "./store";
import axios from "axios";

const destroy = async(brewery) => {
    await axios.delete(`/api/breweries/${brewery.id}`)
    store.dispatch({type:"SANS_BREW", brewery})

}



class Breweries extends React.Component {
    constructor() {
        super()
        this.state = store.getState()
    }
    componentDidMount() {
        store.subscribe(() => this.setState(store.getState()))
    
    }
    render() {
        const breweries = this.state.breweries
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

}

export default Breweries