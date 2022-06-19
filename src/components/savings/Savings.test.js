import Savings from './Savings';
import TestRenderer from 'react-test-renderer';

describe("Test the Savings component", () =>{
    test("Test to see if the correct amount of buttons render", () => {
        const testRenderer = TestRenderer.create(
            <Savings/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("button").length).toBe(1);
    });

    test("Test to see if the correct amount of buttons render", () => {
        const testRenderer = TestRenderer.create(
            <Savings/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("input").length).toBe(1);
    });
})
