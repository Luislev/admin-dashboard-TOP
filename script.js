'use strict';

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("[data-theme-toggle]");
const iconElement = document.getElementById("icon");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });


function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    const newIcon = newTheme === "dark" ? "ti ti-moon" : "ti ti-sun";
    iconElement.className = newIcon;
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    currentThemeSetting = newTheme;
});