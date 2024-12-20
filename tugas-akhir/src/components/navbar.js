import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/create">Create Report</Link></li>
        </ul>
    </nav>
);

export default Navbar;
