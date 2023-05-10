// jshint esversion:6

import { ReactNode } from "react";

type FormWrapperProps = {
    title: string,
    currentStep: number,
    totalSteps: number,
    children: ReactNode
}

export function FormWrapper({ title, currentStep, totalSteps, children }: FormWrapperProps) {

    return (
        <>
            <div className="relative border-[1px] rounded py-6 w-[500px] px-5">
                <h1 className="mt-[1.3rem] font-bold text-center">{title}</h1>
                <div className="absolute top-[10px] right-[10px]">{currentStep + 1} / {totalSteps}</div>

                <div>
                    {children}
                </div>
            </div>
        </>
    );
}