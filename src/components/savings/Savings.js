import React, {useEffect, useState, useRef} from 'react';
import styles from './Savings.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';

const Savings = (props) => {

    useEffect(() => {
        console.log(props.income)
    }, [props.income]);

    const savingsPercentage = useRef();
    const calculateSavings = () => {
        let perc = savingsPercentage.current.value;
        console.log("🚀 ~ file: Savings.js ~ line 16 ~ calculateSavings ~ perc", perc)
    }
    
    return (
        <div className={ styles.container }>
            <div className={ styles.headingContainer }>
                <h3>Savings</h3>
                <Button
                    label='Calculate Savings '
                    onClick={calculateSavings}
                />
            </div>
            <hr/>
            <div className={ styles.bottomContainer }>
                <Input
                    type='number'
                    placeholder='Savings Percentage'
                    ref={savingsPercentage}
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