import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.scss';

const Header = () => {
    return (
        <div style={{ width: '100%'}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
                <h6 style={{ textAlign: 'left', padding: '20px'}}>HME</h6>
            </Link>
        </div>
    )
}

export default Header;