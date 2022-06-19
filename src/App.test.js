import App from './App';
import TestRenderer from 'react-test-renderer';

describe("Test the App component to see if anything at all renders", () =>{
    test("Test to see if the correct amount of buttons render", () => {
        const testRenderer = TestRenderer.create(
            <App/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("button").length).toBe(3);
    });

    test("Test to see if the correct amount of Inputs render", () => {
        const testRenderer = TestRenderer.create(
            <App/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("input").length).toBe(5);
    });
})
