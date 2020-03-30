import React from 'react'
import DrawerToggleButton from './DrawerToggleButton'

const Navbar = props => (

    <header className="navbar">
        <nav className="navbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerToggleClickHandler}/>
            </div>
            <div className="navbar_logo"><a href="/">LOGO..</a></div>
            <div className="spacer"></div>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">TESTS</a></li>
                    <li><a href="/">DASHBOARD</a></li>
                    <li><a href="/">LOGOUT</a></li>
                </ul>
            </div>
        </nav>
    </header>

)
export default Navbar;