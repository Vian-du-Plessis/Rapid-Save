import IncomeAfterTax from "./IncomeAfterTax";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

const object = [{
    name: 'Vian',
    messageTwo: 'Vian paid R10385 to tax and has a net income of R138559 for the year'
}]

const IncomeAfterTaxProps = {
    title: 'Income after Tax',
    value: object
}

describe("Test Income After Tax Component...", () => {

    test("Show correct title...", () => {
        render(
            <IncomeAfterTax
                {...IncomeAfterTaxProps}
            />
        );
        const titleElement = screen.getByText("Income after Tax");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Income after Tax");
    });

    test("Show correct sub Heading One...", () => {
        render(
            <IncomeAfterTax
                {...IncomeAfterTaxProps}
            />
        );
        const titleElement = screen.getByText("Vian paid R10385 to tax and has a net income of R138559 for the year");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Vian paid R10385 to tax and has a net income of R138559 for the year");
    });

    // SNAPSHOT TEST
    test("Snapshot of component", () => {
        const component = renderer.create(
            <IncomeAfterTax/>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    })

})