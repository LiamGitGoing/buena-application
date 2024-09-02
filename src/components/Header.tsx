import React from 'react';
import './HeaderStyled.css';
const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Welcome to Buena</h1>
                <nav>
                    <ul>
                        <li><a href="/personal-info">Personal Info</a></li>
                        <li><a href="/salary-indications">Salary Indications</a></li>
                        <li><a href="/summary">Summary</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
