import React from 'react'
import { NavLink } from 'react-router-dom'
function Menu(){
    return (
        <>
            <NavLink to="/"> About US</NavLink>
            <NavLink to="/contact"> Contact US</NavLink>
            
        </>
    )
}

export default Menu;