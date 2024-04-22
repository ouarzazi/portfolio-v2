import { signal,effect } from "@preact/signals-react";


type Theme = "light" | "dark";

const localTheme = window.localStorage.getItem("theme") as Theme | null;


export let themeSignal = signal<Theme>(localTheme || "dark");

function applyTheme() {
    if (themeSignal.value === "dark") {
        document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
}
export function toggleTheme() {
    themeSignal.value = themeSignal.value === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", themeSignal.value);
    applyTheme();
}
effect(() => {
    applyTheme();
    return () => {
        document.documentElement.classList.remove("dark");
    };
})
