import React from 'react';

import './book.css';

export default function Book(props) {
    return (
        <div className="book">
            <img src={props.imageSrc} />
        </div>
    );
};

Book.defaultProps = {
    text: ''
};
