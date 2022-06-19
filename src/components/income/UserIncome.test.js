import UserIncome from "../income/UserIncome";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Testing our form interaction... ", () => {

    test("checking to see if our inputs are empty...", () => {
        render(<UserIncome/>) 

        const nameInput = screen.getByLabelText(/names/i); 
        const incomeInput = screen.getByLabelText(/income/i);

        expect(nameInput.value).toBe(""); 
        expect(incomeInput.value).toBe(""); 
    })

    test("checking to see if the value we type gets read...", () => {
        render(<UserIncome/>);

        const nameInput = screen.getByLabelText(/names/i); 
        const incomeInput = screen.getByLabelText(/income/i); 

        userEvent.type(nameInput, "Vian du Plessis");  
        userEvent.type(incomeInput, "50000"); 

        expect(nameInput.value).toBe("Vian du Plessis"); 
        expect(incomeInput.value).toBe("50000"); 
    })
})