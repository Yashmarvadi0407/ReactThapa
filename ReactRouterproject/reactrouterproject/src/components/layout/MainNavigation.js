import { NavLink } from "react-router-dom"

import classes from '../layout/MainNavigation.module.css'

const MainNavigation=()=>{
 return(
    <header className={classes.header}>
        <div className={classes.logo}>
          Great quotes
        </div>
        <nav className={classes.nav}> 
        <ul>
            <li>
                <NavLink to='/quotes' activeclassName={classes.active}> 
                All quotes</NavLink>
            </li>

            <li>
                <NavLink to='/new-quote' activeclassName={classes.active}> 
                Add a quote</NavLink>
            </li>
        </ul></nav>
    </header>
 )

}


export default MainNavigation