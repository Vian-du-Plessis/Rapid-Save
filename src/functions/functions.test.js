import {sumOfIncome, averageIncome, calculateTax, expenseTotalSum, removeCard, savingsAmount, deductSavings} from './functions'

describe("Test the household component", () =>{
    test("Sum of incomes added", () => {
        let incomes = [12000, 10000];

        let value = sumOfIncome(incomes[0], incomes[1]);

        expect(value).toBe(incomes[0] + incomes[1]);
    });

    test("Average of incomes", () => {
        let incomes = [12000, 5000, 6000];

        let total = incomes[0] + incomes [1] + incomes[2];

        let value = averageIncome(total, incomes.length);

        expect(value).toBe(Math.round(total/3));
    });

    test("Calculate Tax of income above R 91250", () => {
        let income = [{name: 'Vian', income: 12000}];

        let yearlyIncome = income[0].income * 12;

        let totalTax = yearlyIncome * 0.18 - 16425;

        expect(calculateTax(income[0].income, income[0].name).tax).toBe(totalTax);
        expect(calculateTax(income[0].income, income[0].name).taxMessage).toBe('Vian pays 18% tax');
    });

    test("Calculate Tax of Income below R 91250", () => {
        let income = [{name: 'Vian', income: 1000}];

        let totalTax = 0;

        expect(calculateTax(income[0].income, income[0].name).tax).toBe(totalTax);
    });

    test("Calculate ExpenseTotal", () => {
        let previousValue = 10000;
        let value = 5000;

        let total = previousValue + value;

        expect(expenseTotalSum(previousValue, value)).toBe(total);
        
    });

    test("RemoveCard Index From Array ", () => {
        let array = [
            {name: 'Vian', amount: 1000},
            {name: 'Leander', amount: 1000},
            {name: 'Reinhardt', amount: 1000},
            {name: 'Shanré', amount: 1000}
        ]

        let keyTest = 0;

        let testArr = array.filter((x, index) => index !== keyTest);

        let testedFunction = removeCard(0, array);

        expect(testedFunction).toStrictEqual (testArr);
    });

    test("Test if savings amount is correct", () => {
        let testAmount = 1000;
        let testSavings = 0.5;
        let testSavingAmount = testAmount * testSavings;

        let object = {amount: 1000};
        let savings = 0.5;

        expect(savingsAmount(object, savings)).toBe(testSavingAmount);
    });

    test("Test if correct Amount is displayed after deductions", () => {
        let testAmount = 1000;
        let testDeduct = 500;
        let testFinalAmount = testAmount - testDeduct;

        let object = {amount: 1000};
        let savings = 500;

        expect(deductSavings(object, savings)).toBe(testFinalAmount);
    });
});