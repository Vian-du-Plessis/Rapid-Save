import IncomeSummary from "./IncomeSummary";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';


const IncomeSummaryProps = {
    title: 'Household income summary',
    subheadingOne: 'Total Income',
    subbodyOne: 'R 0',
    subheadingTwo: 'Average Income',
    subbodyTwo: 'R 0'
}

describe("Test Income Summary Component...", () => {

    test("Show correct title...", () => {
        render(
            <IncomeSummary
                {...IncomeSummaryProps}
            />
        );
        const titleElement = screen.getByText("Household income summary");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Household income summary");
    });

    test("Show correct sub Heading One...", () => {
        render(
            <IncomeSummary
                {...IncomeSummaryProps}
            />
        );
        const titleElement = screen.getByText("Total Income");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Total Income");
    });

    test("Show correct sub Heading Two...", () => {
        render(
            <IncomeSummary
                {...IncomeSummaryProps}
            />
        );
        const titleElement = screen.getByText("Average Income");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Average Income");
    });

    // SNAPSHOT TEST
    test("Snapshot of component", () => {
        const component = renderer.create(
            <IncomeSummary/>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    })

})