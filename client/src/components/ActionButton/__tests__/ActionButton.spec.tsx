import {render, RenderResult} from '@testing-library/react';
import ActionButton from 'components/ActionButton';
import {Props} from '../types';
import {BUTTON_COLORS, BUTTON_TYPES} from 'shared/types';

let documentBody: RenderResult;

describe("<ActionButton />", () => {
    const props: Props = {
        variant: BUTTON_TYPES.OUTLINED,
        value: 'SAVE',
        color: BUTTON_COLORS.PRIMARY,
        onClick: () => {
            console.log("Clicked")
        },
    }
    beforeEach(() => {
        documentBody = render(<ActionButton {...props} />)
    });
    it('matches snapshot', () => {
        const {baseElement} = documentBody;
        expect(baseElement).toMatchSnapshot();
    })

});