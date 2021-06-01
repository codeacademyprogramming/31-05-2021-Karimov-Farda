import React from 'react'
import ReactDOM from 'react-dom'

import {MainPage} from './modules/coffee-order/components/index'
import {} from '@testing-library/jest-dom'
import { getAllByDisplayValue, getByLabelText, getByTestId, getByText } from '@testing-library/dom';
import {render,fireEvent } from '@testing-library/react'


test('should my dummy function',async () => {
    const {getByText} = render(<MainPage />);
    expected(getByText("Add")).not.toBeUndefined();
    expected(getAllByDisplayValue("radio")).not.toBeUndefined();
    expected(getByTestId("list")).not.toBeUndefined();

    fireEvent.change(getByLabelText("Order : London, Baku , Ankara, Istanbul , Berlin, Paris, Madrid , Moscow"),{target : {value : "Learn React"}})
    fireEvent.click(getByText("Add"))

    expect(getByTestId("input").textContent).toEqual(
        expect.stringMatching(/london | baku | ankara | istanbul | berlin | paris | madrid | moscow | kiev/ig)
    )

    
})