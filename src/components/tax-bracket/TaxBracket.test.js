import TaxBracket from './TaxBracket';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

const taxObject = [{
    name: 'Vian',
    message: 'Vian does not pay any tax'
}]

const TaxBracketProps = {
    title: 'Household income summary',
    value: taxObject
}

describe("Test Income Summary Component... ", () => {

    test("Show correct title...", () => {
        render(
            <TaxBracket
                {...TaxBracketProps}
            />
        );
        const titleElement = screen.getByText("Tax Brackets");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Tax Brackets");
    });

    test("Show correct sub Heading One...", () => {
        render(
            <TaxBracket
                {...TaxBracketProps}
            />
        );
        const titleElement = screen.getByText("Vian does not pay any tax");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Vian does not pay any tax");
    });

    // SNAPSHOT TEST
    test("Snapshot of component", () => {
        const component = renderer.create(
            <TaxBracket/>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    })

})