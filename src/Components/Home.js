import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="home">
                <h1 className="title">grayscale</h1>
                    <div className="paragraph">
                    <p>A free, responsive, one page Bootstrap theme created by Start Bootstrap.</p>
                    <button>get started</button>
                </div>
            </div>
        )
    }
}

export default Home
