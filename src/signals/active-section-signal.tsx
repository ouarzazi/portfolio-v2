import { signal } from "@preact/signals-react";
import { useInView } from "react-intersection-observer";

import { links } from "../lib/data";
import { useEffect } from "react";

export type SectionName = (typeof links)[number]["name"];



export let activeSectionSignal = signal<SectionName>("Home");
export let timeOfLastClickSignal = signal<number>(Date.now());

export function useActiveSection(sectionName: SectionName) {
    const [ref, inView] = useInView({
        threshold: 0.30,
    });

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClickSignal.value > 1000){
            activeSectionSignal.value = sectionName;
        }
    }, [inView]);

    return ref;
}
