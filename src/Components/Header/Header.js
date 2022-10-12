import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">Topic</Link>
            <Link to="statistics">Statistics</Link>
            <Link to="blog">Blog</Link>
        </div>
    );
};

export default Header;