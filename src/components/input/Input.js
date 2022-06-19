import React, {forwardRef} from 'react';
import styles from './Input.module.scss';


const Input = forwardRef((props, ref) => {
    return (
        <input
            ref={ ref }
            onChange={props.onChange}
            aria-label={props.ariaLabel}
            type={ props.type || 'text' }
            name={ props.name || '' }
            placeholder={ props.placeholder || 'No Label' }
            defaultValue={props.defaultValue}
        />
    );
});

export default Input;