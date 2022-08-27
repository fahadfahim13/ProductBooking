import React, {MouseEvent, SyntheticEvent} from 'react';
import {render, RenderResult} from '@testing-library/react';
import Alert from 'components/Alert';
import {Props} from '../types';
import { HORIZONTAL, VERTICAL } from 'shared/types';

let documentBody: RenderResult;

describe("<ActionButton />", () => {
    const props: Props = {
        open: true,
        autoHideDuration: 3000,
        message: 'Demo Alert Message',
        vertical: VERTICAL.TOP,
        horizontal: HORIZONTAL.CENTER,
        onClose: (event: SyntheticEvent | MouseEvent) => {
            console.log("Mouse Clicked");
        },
    }
    beforeEach(() => {
        documentBody = render(<Alert {...props} />)
    });
    it('matches snapshot', () => {
        const {baseElement} = documentBody;
        expect(baseElement).toMatchSnapshot();
    })

});
