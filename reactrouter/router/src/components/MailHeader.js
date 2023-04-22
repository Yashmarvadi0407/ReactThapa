import {NavLink} from 'react-router-dom'
import classes from "../components/MailHeader.module.css"

function MailHeader(){
    return (
        <header className={classes.header}> 
        <nav>
            <ul>
             <li>
             <NavLink  activeclassName={classes.active}  to="/welcome">Welcome</NavLink>
            </li>
            <li>
            <NavLink  activeclassName={classes.active}to="/product">Product</NavLink>
            </li>
            </ul>
        </nav></header>
    )
}


export default MailHeader