import React from "react";
import { ThemeProvider } from "js/contexts/ThemeContext";
import { CalendarProvider } from "js/contexts/CalendarContext";
import { EventsProvider } from "js/contexts/EventsContext";
import Planner from "Planner";
import s from "./styles.module.css";

const App = () => (
    <div className={s.app}>
        <ThemeProvider>
            <CalendarProvider>
                <EventsProvider>
                    <Planner />
                </EventsProvider>
            </CalendarProvider>
        </ThemeProvider>
    </div>
);

export default App;
