import React from "react";
import { Helmet } from "react-helmet";
import { useThemeStore, useThemeDispatch } from "js/contexts/ThemeContext";
import { toggleTheme } from "js/actions";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

const PlannerHeader = () => {
    const { darkMode } = useThemeStore();
    const dispatch = useThemeDispatch();

    return (
        <SectionHeader>
            <Helmet>
                <html data-theme={darkMode && "dark"} />
            </Helmet>
            <Button onClick={() => dispatch(toggleTheme())}>
                Mode: {darkMode ? "Dark" : "Light"}
            </Button>
        </SectionHeader>
    );
};

export default PlannerHeader;
