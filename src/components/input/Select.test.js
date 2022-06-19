import Select from './Select';
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";


describe("Test the Select component ", () =>{
    test("Create Rendered Select", () => {

        const testBtn = TestRenderer.create(
            <Select
                defaultValue='10%'
            />
        );
        const btnTestInstance = testBtn.root;
        expect(btnTestInstance.findByType(Select).props.defaultValue).toBe["10%"];
    });

    test("Select Matches Snapshot", async () => {
        let root;
        await act(() => {
            root = create(            
                <Select
                    defaultValue='10%'
                />
            );
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(
                <Select
                    defaultValue='10%'
                />
            );
            expect(root.toJSON()).toMatchSnapshot();
        })
    })
})
