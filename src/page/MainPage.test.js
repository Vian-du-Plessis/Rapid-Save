import MainPage from './MainPage';
import TestRenderer from 'react-test-renderer';

describe("Test the MainPage component", () =>{
    test("Test to see if the correct amount of buttons render", () => {
        const testRenderer = TestRenderer.create(
            <MainPage/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("button").length).toBe(3);
    });

    test("Test to see if the correct amount of Inputs render", () => {
        const testRenderer = TestRenderer.create(
            <MainPage/>
        )

        const testInstance = testRenderer.root;

        expect(testInstance.findAllByType("input").length).toBe(5);
    });
})
