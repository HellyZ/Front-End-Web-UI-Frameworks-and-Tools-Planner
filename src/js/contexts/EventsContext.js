import makeStore from "../store";
import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions";

const storageKey = "events";
const localState = JSON.parse(localStorage.getItem(storageKey));
const initalState = {};

const addEvent = (state, action) => {
    const { dateId, data } = action;
    const newState = { ...state };
    const event = { ...data, id: Date.now() };

    if (!state[dateId]) {
        newState[dateId] = [event];
    } else {
        newState[dateId] = [...newState[dateId], event];
    }

    return newState;
};

const updateEvent = (state, action) => {
    const { dateId, eventId, data } = action;
    const newEvents = { ...state };

    newEvents[dateId] = newEvents[dateId].map((event) =>
        event.id === eventId ? { ...event, ...data } : event
    );

    return newEvents;
};

const deleteEvent = (state, action) => {
    const { dateId, eventId } = action;
    const newEvents = { ...state };

    newEvents[dateId] = newEvents[dateId].filter(
        (event) => event.id !== eventId
    );

    if (newEvents[dateId].length === 0) delete newEvents[dateId];

    return newEvents;
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return addEvent(state, action);
        case DELETE_EVENT:
            return deleteEvent(state, action);
        case UPDATE_EVENT:
            return updateEvent(state, action);
        default:
            return state;
    }
};

const [EventsProvider, useEventsStore, useEventsDispatch] = makeStore(
    reducer,
    localState || initalState,
    storageKey
);

export { EventsProvider, useEventsStore, useEventsDispatch };
