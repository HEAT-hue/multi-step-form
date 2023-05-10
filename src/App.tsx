// jshint esversion:6
import { FormEvent, useState } from "react";

import { useMultistepForm } from "./hooks";  // Custom hook to handle multiple form state
import { FormWrapper } from "./components";  // Wrapper design for all form
import { UsernamesFormInput, UserlocationFormInput, UseraccountFormInput } from "./components/formSection";  // Different form states
import type { userDataType } from "./data"; // User data type
import { userData } from "./data";  // User Data

export default function App() {

  const [currentUserData, setCurrentUserData] = useState<userDataType>(userData);

  // Update the global form field available to all form sections
  function updateFields(formData: Partial<userDataType>) {
    setCurrentUserData((userData) => {
      return { ...userData, ...formData }
    })
  }

  // Array of different form steps components
  const formSections = [
    <UsernamesFormInput {...currentUserData} updateFields={updateFields} />,
    <UserlocationFormInput {...currentUserData} updateFields={updateFields} />,
    <UseraccountFormInput {...currentUserData} updateFields={updateFields} />
  ]

  // Destructure properties and functions from custom hook
  const { currentStepIndex, firstStep, lastStep, steps, step, next, back } = useMultistepForm({ steps: formSections })

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    // Last form step, Submit details
    if (lastStep) return console.log(currentUserData);

    // Go to next form step
    next();
  }

  return (
    <div className="flex justify-center mt-[5rem]">
      <FormWrapper title="User Details" currentStep={currentStepIndex} totalSteps={steps.length} >
        <form onSubmit={(e) => handleFormSubmit(e)}>

          {/* Render each step inside the form */}
          <div className="mt-7">{step}</div>

          {/* Previous and Next buttons */}
          <div className="flex justify-end gap-x-4 mt-7">
            {!firstStep && (<button type="button" className="py-1 px-3 bg-red-700 text-white rounded-sm" onClick={back}>Back</button>)}
            {lastStep ? (<button type="submit" className="py-1 px-3 bg-blue-700 text-white rounded-sm">Finish</button>) : (<button type="submit" className="py-1 px-3 bg-green-700 text-white rounded-sm">Next</button>)}
          </div>

        </form>
      </FormWrapper>
    </div>
  );
}
