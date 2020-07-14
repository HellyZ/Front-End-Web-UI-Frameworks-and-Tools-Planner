import makeStore from "../store";
import { TOGGLE_THEME } from "../actions";

const storageKey = "darkMode";
const localState = JSON.parse(localStorage.getItem(storageKey));

const initalState = {
    darkMode: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

const [ThemeProvider, useThemeStore, useThemeDispatch] = makeStore(
    reducer,
    localState || initalState,
    storageKey
);

export { ThemeProvider, useThemeStore, useThemeDispatch };
