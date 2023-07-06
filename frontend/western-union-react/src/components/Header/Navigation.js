import React from 'react'
import './Navigation.css'
import logo from '../../assets/logo.wu.big.svg'
import menu from '../../assets/menu.svg'
export default function Navigation() {
    return (
        <header>
            <nav>
                <img src={logo} alt='Western Union' />
                <button><a href="/">Send Money</a></button>
                <button><a href="/">Pick up cash</a></button>
                <button><a href="/"><img src={menu} alt='Menu' /></a></button>
                <button><a href="/"><img src='' alt='Globe' />EN</a></button>
                <button><a href="/">Join now</a></button>
                <button><a href='/'>Log in</a></button>
            </nav>
        </header>
    )
}
