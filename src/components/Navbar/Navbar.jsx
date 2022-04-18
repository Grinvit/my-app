import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"activeClassName={s.activeLink}> General</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'activeClassName={s.activeLink}>Messanges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/artist"activeClassName={s.activeLink}>Artist</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>)
}
export default Navbar