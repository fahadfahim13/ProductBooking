import { Moment } from "moment";

export interface DatePickerProps {
    value: Moment | null;
    onChange: (newValue: Moment | null) => void;
    label: string;
    minDate?: Moment;
}