// Action types
export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const SET_MONTH = "SET_MONTH";
export const SET_TODAY = "SET_TODAY";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";

// Action creators
export const toggleTheme = () => ({ type: TOGGLE_THEME });
export const setSelectedDate = (date) => ({ type: SET_SELECTED_DATE, date });
export const setMonth = (month) => ({ type: SET_MONTH, month });
export const setToday = () => ({ type: SET_TODAY });
export const addEvent = (dateId, data) => ({ type: ADD_EVENT, dateId, data });
export const deleteEvent = (dateId, eventId) => ({
    type: DELETE_EVENT,
    dateId,
    eventId,
});
export const updateEvent = (dateId, eventId, data) => ({
    type: UPDATE_EVENT,
    dateId,
    eventId,
    data,
});
