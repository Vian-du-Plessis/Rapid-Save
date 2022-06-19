import ExpenseCard from './ExpenseCard';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";


describe("Test the ExpenseCard component", () =>{
    test("Create Rendered ExpenseCard", () => {

        const testBtn = TestRenderer.create(
            <ExpenseCard
                title='Water'
                price='R 1000'
            />
        );
        const btnTestInstance = testBtn.root;
        expect(btnTestInstance.findByType(ExpenseCard).props.label).toBe["Water"];
    });

    test("ExpenseCard Matches Snapshot", async () => {
        let root;
        await act(() => {
            root = create(            
                <ExpenseCard
                    title='Water'
                    price='R 1000'
                />
            );
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(
                <ExpenseCard
                    title='Water'
                    price='R 1000'
                />
            );
            expect(root.toJSON()).toMatchSnapshot();
        })
    })
})
