import React, {useEffect, useState, useRef} from 'react';
import styles from './Savings.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';

import { savingsAmount, deductSavings } from '../../functions/functions'; 

const Savings = (props) => {

    const [savings, setSavings] = useState(0);
    const [income, setIncome] = useState(0);

    useEffect(() => {
        console.log('shap')
    }, [props.income]);

    const savingsPercentage = useRef();
    const calculateSavings = () => {
        let perc = savingsPercentage.current.value;
        let incomeValue = props.income;
        
        if(perc == '' ) {
            alert('Please add a savings percentage')
        } else {
            if(perc.split('.')[0] == 0 ) {
                perc = perc;
            } else {
                perc = perc/100;
            }
        }

        setSavings(Math.round(savingsAmount(incomeValue, perc)));
        setIncome(Math.round(deductSavings(incomeValue, savingsAmount(incomeValue, perc))));
    }
    
    return (
        <div className={ styles.container }>
            <div className={ styles.headingContainer }>
                <h3>Savings</h3>
                <Button
                    label='Calculate Savings'
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
                    <h4>R{savings}</h4>
                </div>
                <div className={ styles}>
                    <h5>Final Income</h5>
                    <h4>R{income}</h4>
                </div>
            </div>
        </div>
    );
};

export default Savings;