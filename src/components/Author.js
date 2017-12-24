import React from 'react';

import './Author.css';

export default function Author(props) {
    return (
        <div className="author">
            <h3>{props.author}</h3>
            <img src={props.imageSrc} />
        </div>
    );
};

Author.defaultProps = {
    // text: ''
};
