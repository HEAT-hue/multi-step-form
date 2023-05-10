// jshint esversion:6

import { ReactElement, useState } from "react";

type useMultistepFormProps = {
    steps: ReactElement[]
}

export function useMultistepForm({ steps }: useMultistepFormProps) {

    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    const firstStep = currentStepIndex == 0;
    const lastStep = currentStepIndex == (steps.length - 1);

    function next() {
        if (currentStepIndex >= steps.length - 1) return;
        setCurrentStepIndex(currentStepIndex + 1);
    }

    function back() {
        if (currentStepIndex <= 0) return;
        setCurrentStepIndex(currentStepIndex - 1)
    }

    return ({
        currentStepIndex,
        steps,
        step: steps[currentStepIndex],
        firstStep,
        lastStep,
        next,
        back
    });
}