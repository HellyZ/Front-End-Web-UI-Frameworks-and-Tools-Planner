import makeStore from "../store";
import { SET_SELECTED_DATE, SET_MONTH, SET_TODAY } from "../actions";

const initalDate = new Date();

const initalState = {
    selectedDate: initalDate,
    currentMonth: initalDate,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SELECTED_DATE:
            return { ...state, selectedDate: action.date };
        case SET_MONTH:
            return { ...state, currentMonth: action.month };
        case SET_TODAY:
            return { ...initalState };
        default:
            return state;
    }
};

const [CalendarProvider, useCalendarStore, useCalendarDispatch] = makeStore(
    reducer,
    initalState
);

export { CalendarProvider, useCalendarStore, useCalendarDispatch };
