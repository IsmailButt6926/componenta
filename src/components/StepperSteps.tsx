import React, { useState } from 'react'

type Props = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    flagStep1: boolean;
    flagStep2: boolean;
    flagStep3: boolean;
    flagStep4: boolean;
    details:any
}

const StepperSteps = (props: any) => {
    const { currentStep, setCurrentStep, flagStep1, flagStep2, flagStep3, flagStep4,details,item } = props
    // console.log("item", item)
    return (
        <div>
            <ol className="space-y-4 w-72">
                <li>
                    <div className={`w-full p-4 ${item?.class} rounded-lg`} role="alert">
                        <div className="flex items-center justify-between">
                            <span className="sr-only">{item?.heading}</span>
                            <h3 className="font-medium">{item?.label}</h3>
                            <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default StepperSteps