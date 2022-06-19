import React from 'react';
import styles from './Nav.module.scss';
import Logo from '../../assets/svg/logo.svg';

const Nav = () => {
    return (
        <div className={ styles.container }>
            <img src={ Logo } alt="This is the logo" />
        </div>
    );
};

export default Nav;