import React from "react";
import PlannerHeader from "./PlannerHeader";
import Calendar from "./Calendar";
import Events from "./Events";
import s from "./styles.module.css";

const Planner = () => (
    <>
        <PlannerHeader />
        <div className={s.planner}>
            <Calendar />
            <Events />
        </div>
    </>
);

export default Planner;
