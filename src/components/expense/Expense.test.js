import Expense from './Expense';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Test the Input component", () =>{
        test("Test to see if values are empty on render", () => {
            render(<Expense/>)

            const expenseTitle = screen.getByPlaceholderText(/Expense name.../i);
            const expenseAmount = screen.getByPlaceholderText(/Expense amount.../i);

            expect(expenseTitle.value).toBe("");
            expect(expenseAmount.value).toBe("");
        });

        test("Test to see if the inputs behave correctly", () => {
            render(<Expense/>)

            const expenseTitle = screen.getByPlaceholderText(/Expense name.../i);
            const expenseAmount = screen.getByPlaceholderText(/Expense amount.../i);
            
            userEvent.type(expenseTitle, 'MelkSkommels');
            userEvent.type(expenseAmount, "3600");

            expect(expenseTitle.value).toBe('MelkSkommels');
            expect(expenseAmount.value).toBe("3600");
        });

        test("Check to see if button is in Component", () => {
            render(<Expense/>)

            const button = screen.getByLabelText(/Expense Button/i);

            expect(button).toBeInTheDocument();
        });
})