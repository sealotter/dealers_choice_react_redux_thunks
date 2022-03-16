import React from "react";
import store from './store'


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
                <h1>Top Breweries To Try ({breweries.length})</h1>
                <ul>
                    {breweries.map(brewery => {
                        return(
                            <li>{brewery.name}</li>
                        )
                    })}

                    
                </ul>

            </div>
        )
        
    }

}

export default Header;