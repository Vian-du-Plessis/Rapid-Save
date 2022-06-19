export const sumOfIncome = (prevValue, nextValue) => {
    let incomeTotal = prevValue + nextValue;
    return incomeTotal;
}

// This function needs to be tested.
export const averageIncome = (income, totalIncomes) => {
    let incomeAverage = Math.round(income/totalIncomes);
    return incomeAverage;
}

// This function needs to be tested
export const calculateTax = (income, name) => {
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

    let netIncome = Math.round(inc - tax);

    let messageTwo = name + ' paid R' + Math.round(tax) + ' to tax and has a net income of R' + netIncome + ' for the year'

    return {tax: Math.round(tax), taxMessage: taxMessage, incomeAfter: netIncome, messageTwo: messageTwo};
}

export const expenseTotalSum = (prevValue, nextValue) => {
    let expenseTotal = prevValue + nextValue;
    return expenseTotal;
}

export const removeCard = (keyVal, arr) => {
    let newArr = arr.filter((x, index) => index !== keyVal);
    return newArr;
}