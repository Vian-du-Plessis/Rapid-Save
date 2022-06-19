import React, {useState} from 'react';
import styles from './Savings.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';

const Savings = (props) => {

    
    return (
        <div className={ styles.container }>
            <div className={ styles.headingContainer }>
                <h3>Savings</h3>
                <Button
                    label='Add expense'
                />
            </div>
            <hr/>
            <div className={ styles.bottomContainer }>
                <Input
                    type='number'
                    placeholder='Savings Percentage'
                />
                <div className={ styles}>
                    <h5>Savings amount</h5>
                    <h4>R1 540</h4>
                </div>
                <div className={ styles}>
                    <h5>Final Income</h5>
                    <h4>R40</h4>
                </div>
            </div>
        </div>
    );
};

export default Savings;