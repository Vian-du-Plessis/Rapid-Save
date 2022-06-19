import React, {useState, useRef} from 'react';
import {sumOfIncome, averageIncome, calculateTax} from '../functions/functions'

/* Import CSS */
import styles from './MainPage.module.scss';

/* Import Components */
import Nav from '../components/nav/Nav';
import Button from '../components/button/Button';
import UserIncome from '../components/income/UserIncome';
import IncomeSummary from '../components/income-summary/IncomeSummary';
import TaxBracket from '../components/tax-bracket/TaxBracket';

/* Import SVG */
import AddIcon from '../assets/svg/add.svg';
import IncomeAfterTax from '../components/income-after-tax/IncomeAfterTax';
import ExpenseCard from '../components/expense-card/ExpenseCard';
import Savings from '../components/savings/Savings';
import Input from '../components/input/Input';
import Expense from '../components/expense/Expense';


const MainPage = () => {
    
    const [netIncome, setNetIncome] = useState(0);

    const [incomeTotal, setIncomeTotal] = useState(0);
    const [incomeAverage, setIncomeAverage] = useState(0);
    const [allIncomes, setAllIncomes] = useState(0);
    const [incomeArr, setIncomeArr] = useState([]);

    const [taxArr, setTaxArr] = useState([]);

    const [finalIncome, setFinalIncome] = useState({
        amount: 0
    })
    
/*     // This function needs to be tested.
    const sumOfIncome = (prevValue, nextValue) => {
        let incomeTotal = prevValue + nextValue;
        setIncomeTotal(incomeTotal);
        return incomeTotal;
    }


    // This function needs to be tested.
    const averageIncome = (income, totalIncomes) => {
        let incomeAverage = Math.round(income/totalIncomes);
        setIncomeAverage(incomeAverage)
        return incomeAverage;
    }

    // This function needs to be tested
    const calculateTax = (income, name) => {
        const rebate = 16425; // rebate that is deducted from the amount of tax

        const brackets = [
            {min: 1,amount: 226000, per: 0.18, base: 0, rebate: 16425},
            {min: 226001, amount: 353100, per: 0.26, base: 40680 , rebate: 16425},
            {min: 353101, amount: 488700, per: 0.3, base: 73726 , rebate: 16425},
            {min: 488701, amount: 641400, per: 0.36, base: 115762 , rebate: 16425},
            {min: 641401, amount: 817600, per: 0.39, base: 170734 , rebate: 16425},
            {min: 817601, amount: 1731600, per: 0.41, base: 239452 , rebate: 16425},
            {min: 1731601, amount: Infinity, per: 0.45, base: 614192 , rebate: 16425}
        ]
        
        let inc = income * 12; // monthly income multiplied by 12

        let index = 0;
        // finds the brakcers
        for(let i = 6; i > -1 ; i--) {
            if(inc <= brackets[i].amount && inc >= brackets[i].min ) {
                index = i;
                break;
            } 
        }

        let tax = 0;
        let taxable = 0;
        if(index == 0) {
            if(inc < 91250) { // if the yearly salary is less than
                tax = 0
            } else {
                tax = (inc * brackets[index].per) - brackets[index].rebate
            }
        } else {
            taxable =  inc - (brackets[index].min - 1) // the amount of taxable income
            tax = brackets[index].base + (brackets[index].per * taxable) - rebate // tax that has to be paid on a yearly basis
        }

        let taxMessage = '';
        if( (brackets[index].per * 100) <= 18 && inc > 91250 ) {
            taxMessage = name + ' pays ' + (brackets[index].per * 100) + '% tax'
        } else if( (brackets[index].per * 100) > 18) {
            taxMessage = name + ' pays a base tax of R ' + brackets[index].base + ' + ' + (brackets[index].per * 100) + '%'
        } else {
            taxMessage = name + ' does not pay any tax'
        }

        return {tax: tax, taxMessage: taxMessage};
    } */


    
    const userName = useRef();
    const userIncome = useRef();
    const userSaving = useRef();
    const getIncome = () => {
        let name = userName.current.value;
        let income = +userIncome.current.value;
        let incomeArr1 = {
            name: name,
            income: income
        }
        let taxObject = {
            name: name,
            tax: calculateTax(income, name).tax,
            message: calculateTax(income, name).taxMessage,
            messageTwo: calculateTax(income, name).messageTwo,
        }

        let prevNetIncome = netIncome;

        setNetIncome( prevNetIncome + calculateTax(income, name).incomeAfter);

        if(name == '' || income == '') {
            alert('Please make sure to add a Name and the Income');
        } else {
            setIncomeArr((prev) => (
                [...prev, incomeArr1]
            ));
    
            setIncomeTotal(
                sumOfIncome(incomeTotal, income)
            );
            
            setAllIncomes(allIncomes + 1);

            let incomeAmount = incomeTotal + income;
            let amountOfIncomes =  allIncomes + 1;
            
            setIncomeAverage(
                averageIncome(incomeAmount, amountOfIncomes)
            );

            setTaxArr((prev) => (
                [...prev, taxObject]
            ));
        }
    }

    return (
        <div className={ styles.outerContainer }>
            <Nav/>
            <div className={ styles.bottomContainer }>
                <div className={ styles.bottomContainer__left }>
                    <div className={ styles.bottomContainer__left__heading }>
                        <h1>Income List</h1>
                    </div>
                    <hr />
                    <div className={ styles.inputsContainer } >
                        <input
                            ref={userName}
                            className={styles.inputsContainer__inputs_name}
                            type='text'
                            name='names'
                            aria-label='names'
                            placeholder='Name...'
                        />
                        <input
                            ref={userIncome}
                            className={styles.inputsContainer__inputs_income}
                            type='number'
                            name='income'
                            aria-label='income'
                            placeholder='Income per month...'
                        />
                    </div>   
                    <div className={ styles.buttonContainer }>
                        <Button
                            label='Add Income'
                            onClick={getIncome}
                        />   
                    </div>
                </div>
                <div className={ styles.bottomContainer__right }>
                    <div className={ styles.bottomContainer__right__leftContainer }>
                        <IncomeSummary
                            title='Household income summary'
                            subheadingOne='Total Income'
                            subbodyOne={<><strong>R {incomeTotal}</strong></>}
                            subheadingTwo='Average Income'
                            subbodyTwo={<><strong>R {incomeAverage}</strong></>}
                        />
                        <TaxBracket
                            value={taxArr}
                        />
                        <IncomeAfterTax
                            title='Income after Tax'
                            value={taxArr}
                        />
                    </div>
                    <div className={ styles.bottomContainer__right__rightContainer }>
                        <div className={ styles.expenseContainer }>
                            <Expense
                                netIncome={netIncome}
                                finalNetIncome={item => setFinalIncome({...finalIncome, amount: item})}
                            />
                            <Savings
                                income={finalIncome}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MainPage;