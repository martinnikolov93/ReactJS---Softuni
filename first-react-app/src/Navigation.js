import React from 'react'
import {
    Link
} from "react-router-dom";

import navStyles from './Navigation.module.css'

function Navigation() {
    return (
        <nav>
            <Link className={navStyles['nav-link']} to="/">Home</Link>
            <Link className={navStyles['nav-link']} to="/about">About</Link>
            <Link className={navStyles['nav-link']} to="/forms">Forms</Link>
            <Link className={navStyles['nav-link']} to="/iteratingdata">Iterating Data</Link>
        </nav>
    )
}

export default Navigation