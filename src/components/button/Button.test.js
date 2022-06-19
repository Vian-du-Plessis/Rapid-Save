import Button from './Button';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";


describe("Test the Button component", () =>{
    test("Create Rendered Button", () => {

        const testBtn = TestRenderer.create(
            <Button
                label='Add expense'
            />
        );
        const btnTestInstance = testBtn.root;
        expect(btnTestInstance.findByType(Button).props.label).toBe["Add expense"];
    });

    test("Button Matches Snapshot", async () => {
        let root;
        await act(() => {
            root = create(            
                <Button
                    label='Add expense'
                />
            );
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(
                <Button
                    label='Add expense'
                />
            );
            expect(root.toJSON()).toMatchSnapshot();
        })
    })
})
