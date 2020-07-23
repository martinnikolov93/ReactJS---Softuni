import React from 'react'
import {
    Link
} from "react-router-dom";
import navStyles from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={navStyles.nav}>
            <Link to="/">Home | </Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navigation