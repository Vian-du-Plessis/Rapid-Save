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
    
    const userName = useRef();
    const userIncome = useRef();
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
                        <Input
                            ref={userName}
                            className={styles.inputsContainer__inputs_name}
                            type='text'
                            name='names'
                            aria-label='names'
                            placeholder='Name...'
                        />
                        <Input
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