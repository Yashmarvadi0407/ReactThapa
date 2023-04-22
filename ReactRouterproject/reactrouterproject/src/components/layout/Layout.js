
import MainNavigation from './MainNavigation'

import classes from '../layout/Layout.module.css'

const Layout=(props)=>{
    return( 
        <>
            <MainNavigation></MainNavigation>
            <main className={classes.main}>{props.children} </main>
        </>
    )

}
export default Layout