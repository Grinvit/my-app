import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.sas}>
                    <NavLink to='/dialogs/1'activeClassName={s.activeLink}>Djared Leto</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'activeClassName={s.activeLink}>Sting </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'activeClassName={s.activeLink}>Pisyn</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'activeClassName={s.activeLink}>Elvis</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'activeClassName={s.activeLink}>Oliver Sykes</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Where is my money Lebovski?</div>
                <div className={s.massage}>In your ass</div>
                <div className={s.massage}>I love your mom</div>
            </div>
        </div>
    )
}
export default Dialogs