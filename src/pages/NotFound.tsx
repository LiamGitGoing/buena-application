import React from 'react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Button onClick={() => window.location.href = "/"}>Go to Home</Button>
        </div>
    );
};

export default NotFound;
