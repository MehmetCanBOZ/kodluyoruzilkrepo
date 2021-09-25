import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom/extend-expect';

describe('Header Test',()=>{
    beforeEach(()=>{
        console.log('render ');
        render(<SearchInput/>);
    })

    test('Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodu',()=>{

        const input = screen.getByTestId('input-search');
        userEvent.type(input,'100');
        
    })
})