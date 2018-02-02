import React from 'react';

import './Author.css';

export default function Author(props) {
    return (
        <div className="author">
            <img src={props.imageSrc} alt="" />
        </div>
    );
};

Author.defaultProps = {
    // text: ''
};
