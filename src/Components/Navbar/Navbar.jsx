import React from 'react'
import './Navbar.css'
import Hamburger from './hamburger.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    // state toggle pour le menu hamburger
    const [toggle, setToggle] = useState(false);

    //fonction pour toggleState pour l'event onclick
    const toggleState = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

    return (
        <nav>
            <ul className='list'>
                <NavLink to="/" className='list-items'
                    style={({ isActive }) => {
                        return isActive ? { color: "lime" } : { color: "white" }
                    }}>Accueil
                </NavLink>

                <NavLink to='/formation' className='list-items'
                    style={({ isActive }) => {
                        return isActive ? { color: "lime" } : { color: "white" }
                    }}>Ma formation
                </NavLink>

                <NavLink to='/experiences' className='list-items'
                    style={({ isActive }) => {
                        return isActive ? { color: "lime" } : { color: "white" }
                    }}>Mon expériences
                </NavLink>

                <NavLink to='/realisations' className='list-items'
                    style={({ isActive }) => {
                        return isActive ? { color: "lime" } : { color: "white" }
                    }}>Mes réalisations
                </NavLink>
                <NavLink to='/contact' className='list-items'
                    style={({ isActive }) => {
                        return isActive ? { color: "lime" } : { color: "white" }
                    }}>Contact
                </NavLink>
            </ul>
            <img onClick={toggleState} className='btn' src={Hamburger} alt="menu" />
        </nav>
    )
}
