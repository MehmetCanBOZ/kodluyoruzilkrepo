import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header Test',()=>{
    beforeEach(()=>{
        console.log('render ');
        render(<Header/>);
    })

    test('Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodu',()=>{
        
        const header = screen.getByTestId('heading');
        expect(header).toHaveTextContent('Emoji Search');

    })
})