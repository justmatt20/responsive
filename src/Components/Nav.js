import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            openComponent: false,

        }
    }


    handleClick = () => {
        this.setState({openComponent: !this.state.openComponent})
        console.log(this.state.openComponent)
    }
    

    render() {
        const openMenu = this.state.openComponent ? 'open_menu' : ''
        // const openLinks = this.state.openComponent ? 'open_links' : ''
        return (
            <div>
                <nav className="nav_bar">
                    <div className="heading">
                        <h1>Start Bootstrap</h1>
                        
                        </div>
                        <img className="ham_btn"  src="/images/menu.png" alt="hamburger menu"  onClick={this.handleClick}/>
                        <ul className="menu">
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                       
                    
                
                <menu className={openMenu}>
                    <ul className="open_links">
                        <li >About</li>
                        <li >Projects</li>
                        <li >Contact</li>
                    </ul>
                </menu>
                </nav>
            </div>
        )
    }
}

export default Nav
