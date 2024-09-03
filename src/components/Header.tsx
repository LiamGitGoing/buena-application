import React from 'react';
import { useLocation } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';

const Header: React.FC = () => {


    return (
        <header>
            <h1>Buena Tenant Application</h1>
            <div>
                <div>
                    <ProgressIndicator />
                </div>
            </div>
        </header>
    );
};

export default Header;
