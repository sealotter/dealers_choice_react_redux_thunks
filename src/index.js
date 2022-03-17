import React from 'react';
import axios from "axios";
import ReactDOM  from "react-dom";
import Header from './Header';
import store from './store';
import Breweries from './Breweries';
import {Provider} from 'react-redux'


class App extends React.Component {
    async componentDidMount() {
        const res = await axios.get('/api/breweries')
        store.dispatch( { type: "SET_BREWS", breweries : res.data })    
        
    }
    render() {
        return(
            <div>
                <Header />
                <Breweries />         
            </div>
        )      
    }   
}



ReactDOM.render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));
