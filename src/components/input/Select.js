import React from 'react';
import styles from './Select.module.scss'

const Select = ( props ) => {
    return (
        <select>
            <option>{ props.defaultValue || '10%' }</option>
        </select>
    );
};

export default Select;