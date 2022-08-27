import { SyntheticEvent, MouseEvent } from "react";
import { VERTICAL, HORIZONTAL } from "shared/types";

export interface Props {
    open: boolean;
    autoHideDuration?: number;
    message: string;
    vertical?: `${VERTICAL}`;
    horizontal?: `${HORIZONTAL}`;
    onClose: (event: SyntheticEvent | MouseEvent) => void;
}