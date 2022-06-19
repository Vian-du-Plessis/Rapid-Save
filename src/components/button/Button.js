import React from 'react';
import styles from './Button.module.scss';

const Button = ( props ) => {
    return (
        <button aria-label={props.aria} onClick={props.onClick}>
            { props.label }
        </button>
    );
};

export default Button;