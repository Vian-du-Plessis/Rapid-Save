import Nav from './Nav';
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";


describe("Test the Nav Image Source", () =>{
    test('Does component use correct source...', async () => {
        const { getByAltText } = await render(<Nav />);
    
        const image = getByAltText('This is the logo');
    
        expect(image).toHaveAttribute('src', 'logo.svg')
    });
})
