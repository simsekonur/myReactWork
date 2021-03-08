import React, { Component } from 'react'


import { Link } from "react-router-dom";
export class Home extends Component {
    render() {
        return (
            <div>
                <p> home </p>
                <p>iki</p>
                <p>zimbiriti</p>
                <Link to= "/about">
                    <button style = {{margin:10}}  className = "btn btn-success">About</button>
                </Link>
            </div>
        )
    }
}

export default Home
