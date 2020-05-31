import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="#/" icon="home" title="Home"></NavItem>
            <NavItem link="#/users" icon="users" title="Users"></NavItem>
        </nav>
    </aside>
