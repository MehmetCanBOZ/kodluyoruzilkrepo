import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmojiResults from './EmojiResults';
import '@testing-library/jest-dom/extend-expect';

describe('Header Test',()=>{
    beforeEach(()=>{
        console.log('render ');
        render(<EmojiResults/>);
    })

    test.skip('Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kod',()=>{
        
        const emojiList = screen.getByTestId('emoji-list');
        expect(emojiList).toBeInTheDocument();

    })
})