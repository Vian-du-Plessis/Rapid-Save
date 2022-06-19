import React from 'react';
import styles from './UserIncome.module.scss';

/* Import Components */
import Input from '../input/Input';

/* Import SVG */
import RemoveIcon from '../../assets/svg/remove.svg';

const UserIncome = (props) => {
    return (
        <div className={ styles.container } key={props.keyVal}>
                <Input
                    type='text'
                    name='names'
                    ariaLabel='names'
                    onChange={ props.nameOnChange }
                    placeholder='Name...'
                />
                <Input
                    type='number'
                    name='income'
                    ariaLabel='income'
                    onChange={ props.numberOnChange }
                    placeholder='Income...'
                />
        </div>
    );
};

export default UserIncome;