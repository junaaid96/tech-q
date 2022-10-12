import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>KichuProshno</h1>
            <div>
            <Link to="/">Topic</Link>
            <Link to="statistics">Statistics</Link>
            <Link to="blog">Blog</Link>
        </div>
        </nav>
    );
};

export default Header;