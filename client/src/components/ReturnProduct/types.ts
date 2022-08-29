import { SelectChangeEvent } from "@mui/material";
import { DateRangeState } from "components/DateRangeSelector/DateRangeReducer";
import { Moment } from "moment";
import { ProductResponse } from "store/Products/types";

export interface BookProductProps {
    open: boolean;
    label: string;
    handleOpen: () => void;
    handleClose: () => void;
    products: ProductResponse[];
    handleProductChange: (e: SelectChangeEvent) => void;
}