import React from "react";
import store from './store'
import Add from "./Add";


class Header extends React.Component {
    constructor() {
        super()
        this.state = store.getState() 
    }
    componentDidMount() {  
        store.subscribe(() => this.setState(store.getState()) )
    }   

    render() {
        const breweries = this.state.breweries
        
        
        return(
            <div>
                <h1>Which Breweries Are The Best? ({breweries.length})</h1>
                <h3>Delete what you don't like and add more to the list:</h3>
                    <Add />
            
            </div>
        )
        
    }
   

}



export default Header;