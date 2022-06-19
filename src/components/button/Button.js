import React from 'react';
import styles from './Button.module.scss';

const Button = ( props ) => {
    return (
        <button onClick={props.onClick}>
            { props.label }
        </button>
    );
};

export default Button;