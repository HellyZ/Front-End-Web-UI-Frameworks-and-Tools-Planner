import React, { createContext, useContext, useReducer, useEffect } from "react";

const makeStore = (reducer, initialState, storageKey) => {
    const StoreContext = createContext();
    const DispatchContext = createContext();

    const StoreProvider = ({ children }) => {
        const [store, dispatch] = useReducer(reducer, initialState);

        useEffect(() => {
            if (storageKey) {
                localStorage.setItem(storageKey, JSON.stringify(store));
            }
        }, [store]);

        return (
            <DispatchContext.Provider value={dispatch}>
                <StoreContext.Provider value={store}>
                    {children}
                </StoreContext.Provider>
            </DispatchContext.Provider>
        );
    };

    const useStore = () => useContext(StoreContext);
    const useDispatch = () => useContext(DispatchContext);

    return [StoreProvider, useStore, useDispatch];
};

export default makeStore;
