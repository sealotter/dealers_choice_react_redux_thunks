import React from 'react';
import axios from "axios";
import ReactDOM  from "react-dom";
import Header from './Header';
import store from './store';

class App extends React.Component {
    async componentDidMount() {
        const response = await axios.get('/api/breweries')
        //changing the value in store through this action
        store.dispatch( { type: "SET_BREWS", breweries : response.data })
       
        
    }
    render() {
        return(
            <div>
                <Header />
            </div>
        )
        
    }
    
    /*
    constructor(){
        super()
        this.state = {
            breweries : [],
            
        }
    }
    
    async componentDidMount() {
        const res = await axios.get('/api/breweries')
        const breweries = res.data
        this.setState({breweries})
    
    }
    async create() {
        const addBrew = await axios.post('/api/breweries')
        const brewery = addBrew.data
        const breweries = [...this.state.breweries, brewery]
        this.setState({ breweries })
       
    }
    */
 

   
    /*render() {
        //const breweries = this.state.breweries
        
        return (
        <div>
            <h1>Top Breweries To Try</h1>
             <h3>Click to see some more: <button onClick = { this.create.bind(this) }>Add A Brew</button> </h3>
            
            <div>
                <ul>
                    {breweries.map(brewery => {
                        return (
                        <li key = { brewery.id }>
                            { brewery.name }
            
                        </li>
                        )
                    })}
                </ul>
            </div>         
        </div>)
    }  */
  
}



ReactDOM.render(<App />, document.querySelector('#root'));
