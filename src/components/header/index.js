import React, { Component } from 'react'
import { HeaderWrapper, NavMenu, NavLink, CartIcon, CartIconCounter } from '../../ui/components/header/index.jsx'

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <NavMenu>
                    <NavLink isActive>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>aboute</NavLink>
                    <NavLink>support autors</NavLink>                  
                </NavMenu>
                <CartIcon style={{ marginLeft: 'auto', marginRight: '5%' }}><CartIconCounter style={{ top: 0, right: 0 }}>5</CartIconCounter></CartIcon>
            </HeaderWrapper>
        )
    }
}