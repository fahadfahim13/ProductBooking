import { ReactElement } from "react";
import {SvgIconProps} from "@mui/material";

import {BUTTON_COLORS, BUTTON_TYPES} from "shared/types";

export interface Props {
    variant?: `${BUTTON_TYPES}` | undefined;
    startIcon?: ReactElement<SvgIconProps>;
    value: string;
    color?: `${ BUTTON_COLORS }` | undefined;
    onClick: () => void;
}
