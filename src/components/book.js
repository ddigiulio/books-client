import React from 'react';

import './book.css';

export default function book(props) {
    return (
        <div className="book">
            <img src={props.imageSrc} alt="" />
        </div>
    );
};


book.defaultProps = {
    text: ''
};
