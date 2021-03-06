import React, {useEffect, useRef, useState} from 'react';

import styles from './Expense.module.scss';

import ExpenseCard from '../expense-card/ExpenseCard';
import Input from '../input/Input';
import Button from '../button/Button';

 export const expenseTotalSum = (prevValue, nextValue, netIncomeValue) => {
    let expenseTotal = prevValue + nextValue;
    let newNetIncome = netIncomeValue - expenseTotal;
    return {expenseTotal: expenseTotal, newNetIncome: newNetIncome};
}

const Expense = (props) => {

    const [expenseTotal, setExpenseTotal] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const [netIncome, setNetIncome] = useState(0);

    const [incomeSend, setIncomeSend] = useState(0);

    useEffect(() => {
        setNetIncome(props.netIncome);
    }, [props.netIncome])

    const removeCard = (keyVal, amount) => {
        let newArr = expenses.filter((x, index)  => index !== keyVal);
        setExpenses(newArr);

        setExpenseTotal(expenseTotal - amount);

        let incomeCalc = incomeSend + amount

        props.finalNetIncome(incomeCalc);
        setIncomeSend(incomeCalc);

        return newArr;
    }

    let expenseName = useRef();
    let expenseAmount = useRef();
    const addExpense = () => {
        let name = expenseName.current.value;
        let amount = +expenseAmount.current.value;
    
        let expenseArr = {
            name: name,
            amount: amount
        }

        if(name == '' || amount == '') {
            alert('Please add a expense and expense name')
        } else {

            setExpenseTotal(expenseTotalSum(expenseTotal, amount, netIncome).expenseTotal);

            props.finalNetIncome(expenseTotalSum(expenseTotal, amount, netIncome).newNetIncome);
            setIncomeSend(expenseTotalSum(expenseTotal, amount, netIncome).newNetIncome);

            setExpenses((prev) => (
                [...prev, expenseArr]
            ));
        }
    }

    return (
        <>
            <div className={styles.headingContainer}>
                <h3>Expenses</h3>
                <Input
                    aria-label='expense-title'
                    type='text'
                    name='expense-title'
                    placeholder='Expense name...'
                    ref={expenseName}
                />
                <Input
                    aria-label='expense-total'
                    type='number'
                    name='expense-total'
                    placeholder='Expense amount...'
                    ref={expenseAmount}
                />
                <Button
                    label='Add expense'
                    onClick={addExpense}
                    aria='Expense Button'
                />
            </div>
            <hr />
            <div className={styles.contentContainer}>
                {
                    expenses.map((item, index) => 
                        <ExpenseCard
                            key={index}
                            title={item.name}
                            price={item.amount}
                            onClick={key => removeCard(index, item.amount)}
                        />    
                    )
                }
            </div>
            <div className={styles.totalContainer}>
                <div className={styles.totalBackground}>
                    <h4>Total <strong>R {expenseTotal}</strong></h4>
                </div>
            </div>
        </>
    );
};

export default Expense;