import React from "react";
import Add from "./Add";
import { connect } from "react-redux";


                
const Header = ({ breweries }) => { 
    if(breweries.length === 5) {
        return 'Nice choices!'
    }
    return (
    <div>
        <h1>Which Breweries Are The Best? ({breweries.length})</h1>
        <h3>Choose your top 5 by deleting what you don't like and adding more:</h3>

            <Add />
            
    </div>
    )

}

const mapStateToProps = function(state) {
    return state

}


export default connect(mapStateToProps)(Header);