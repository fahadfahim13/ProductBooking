import { SelectChangeEvent } from "@mui/material";
import { ProductResponse } from "store/Products/types";

export interface ProductSelectionProps {
    products: ProductResponse[];
    handleChange: (event: SelectChangeEvent) => void;
}