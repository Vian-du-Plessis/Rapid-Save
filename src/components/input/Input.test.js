import Input from './Input';
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";


describe("Test the Input component", () =>{
    test("Create Rendered Input", () => {

        const testBtn = TestRenderer.create(
            <Input
                label='Add expense'
            />
        );
        const btnTestInstance = testBtn.root;
        expect(btnTestInstance.findByType(Input).props.label).toBe["Add expense"];
    });

    test("Input Matches Snapshot", async () => {
        let root;
        await act(() => {
            root = create(            
                <Input
                    label='Add expense'
                />
            );
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(
                <Input
                    label='Add expense'
                />
            );
            expect(root.toJSON()).toMatchSnapshot();
        })
    })
})
