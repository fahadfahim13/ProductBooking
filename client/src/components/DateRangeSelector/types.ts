import { Moment } from "moment";
import { DateRangeState } from "./DateRangeReducer";

export interface DateRangeSelectorProps {
    dateRangeState: DateRangeState;
    onDateFromChange: (val: Moment | null) => void;
    onDateToChange: (val: Moment | null) => void;
}