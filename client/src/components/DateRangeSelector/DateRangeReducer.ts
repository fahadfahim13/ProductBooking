import moment, { Moment } from "moment";

export enum DateRangeActionTypes {
    SET_MIN_DATE,
    SET_DATE_FROM_VALUE,
    SET_DATE_TO_VALUE
}

export interface DateRangeState {
    dateFrom: Moment;
    dateTo: Moment;
    minDateFrom: Moment;
    minDateTo: Moment;
}

export interface DateRangeAction {
    type: DateRangeActionTypes;
    payload: {
        date: Moment;
        increment?: number;
    };
}

export const DefaultDateRangeState: DateRangeState = {
    dateFrom: moment(),
    dateTo: moment(),
    minDateFrom: moment(),
    minDateTo: moment()
}

export const DateRangeReducer = (state: DateRangeState, action: DateRangeAction): DateRangeState => {
    const { type, payload } = action;
    const tempDateTo = moment(payload.date).day(payload.increment ?? 0);
    switch (type) {
      case DateRangeActionTypes.SET_DATE_FROM_VALUE:
        return {
          ...state,
          dateFrom: payload.date,
          dateTo: state.dateTo >= tempDateTo? state.dateTo : tempDateTo,
          minDateTo: tempDateTo,
        };
      case DateRangeActionTypes.SET_DATE_TO_VALUE:
        return {
            ...state,
            dateTo: payload.date,
        };
      case DateRangeActionTypes.SET_MIN_DATE:
        return {
            ...state,
            minDateFrom: payload.date,
            dateFrom: state.dateFrom < payload.date? payload.date: state.dateFrom,
            minDateTo: tempDateTo,
            dateTo: state.dateTo >= tempDateTo? state.dateTo : tempDateTo,
        };
      default:
        return state;
    }
  }