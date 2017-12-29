import React from 'react';

import './Profile.css';

export default function Profile(props) {
    return (
        <div className="profile">
            <h3>{props.name}</h3>
            
        </div>
    );
};

Profile.defaultProps = {
    text: ''
};
