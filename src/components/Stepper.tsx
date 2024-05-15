import React, { useEffect, useState } from "react";
import StepperSteps from "./StepperSteps";
import Toaster from "./Toaster";

type Props = {};

const Stepper = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [details, setDetails] = useState({
    firstName: "",
    email: "",
    compnay: "",
    jobTitle: "",
    phoneNumber: "",
    address: "",
    nationality: "",
    city: "",
  });

  const [steps, setSteps] = useState<any>([
    { id: 1, heading: "User info", label: "1. User info", class: "text-blue-700 bg-blue-100 border border-blue-300", },
    { id: 2, heading: "Account info", label: "2. Account info", class: "text-gray-900 bg-gray-100 border border-gray-300" },
    { id: 3, heading: "Social info", label: "3. Personal info", class: "text-gray-900 bg-gray-100 border border-gray-300" },
    { id: 4, heading: "Confirmation ", label: "4. Confirmation ", class: "text-gray-900 bg-gray-100 border border-gray-300" },
  ])

  useEffect(() => {
  console.log("steps", steps)
  }, [steps])

  const validateSteps = () => {
    if (
      currentStep === 1 &&
      (!details.firstName.trim() || !details.email.trim())
    ) {
      Toaster("User information is required", "error");
      return false;
    } else if (
      currentStep === 2 &&
      (!details.compnay.trim() || !details.jobTitle.trim())
    ) {
      Toaster("Account information is required", "error");
      return false;
    } else if (currentStep === 3) {
      if (!details.phoneNumber || !details.address.trim()) {
        console.log("in 3");
        Toaster("Personal Details are required", "error");
        return false;
      }
    } else if (currentStep === 4) {
      if (!details.nationality.trim() || !details.city.trim()) {
        Toaster("Confirmation Details are required", "error");
        return false;
      }
    }
   
    return true;
  };

  useEffect(() => {
    const updatedArray = steps?.map((item) => {
      if(item?.id === 1){
        if(!details?.firstName.trim() || !details?.email.trim()){
          return { ...item, class:"text-blue-700 bg-blue-100 border border-blue-300"}
        }else{
          return { ...item, class: currentStep === 1 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-green-700 bg-green-100 border border-green-300" }
        }
      } if(item.id === 2){
        if (!details?.compnay.trim() || !details?.jobTitle.trim()){
          return { ...item, class: currentStep === 2 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-gray-900 bg-gray-100 border border-gray-300" }
        } else {
          return { ...item, class: currentStep === 2 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-green-700 bg-green-100 border border-green-300" }
        }
      } if(item.id === 3) {
        if(!details?.address.trim() || !details?.phoneNumber){
          return { ...item, class: currentStep === 3 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-gray-900 bg-gray-100 border border-gray-300" }
        }else {
          return { ...item, class: currentStep === 3 ? 'text-blue-700 bg-blue-100 border border-blue-300'  : "text-green-700 bg-green-100 border border-green-300"  }
        }
      } if(item.id === 4) {
        if(!details?.nationality.trim() || !details?.city.trim()){
          return { ...item, class: currentStep === 4 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-gray-900 bg-gray-100 border border-gray-300" }
        }else{
          return { ...item, class: currentStep === 4 ? 'text-blue-700 bg-blue-100 border border-blue-300' : "text-green-700 bg-green-100 border border-green-300" }
        }
      }else {
        return item
      }
    })
    setSteps(updatedArray)
  },[currentStep,details])

  const handleNext = () => {
    const valid = validateSteps();

    if (currentStep === 4) {
      return;
    }

    if (valid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      return;
    }
    setCurrentStep(currentStep - 1);
  };

  return (
    <main className="w-full min-h-screen ">
      <div className="flex items-center h-[90vh]">
        <section className="w-11/12 mx-auto  flex flex-col">
          <div className="flex gap-80">

            <div className="flex flex-col gap-6">
            {
              steps?.map((item) => (
                <StepperSteps item={item}/>
              ))
            }
            </div>

            {currentStep === 1 && (
              <div className="flex flex-col gap-24 items-center">
                <h2 className="text-3xl font-bold">User Information</h2>
                <div className="flex gap-10">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John"
                      value={details.firstName}
                      onChange={(e) =>
                        setDetails({ ...details, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Email"
                      value={details.email}
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex flex-col gap-24 items-center">
                <h2 className="text-3xl font-bold">Account Information</h2>
                <div className="flex gap-10">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Company
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="company name"
                      value={details.compnay}
                      onChange={(e) =>
                        setDetails({ ...details, compnay: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="job title"
                      value={details.jobTitle}
                      onChange={(e) =>
                        setDetails({ ...details, jobTitle: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col gap-24 items-center">
                <h2 className="text-3xl font-bold">Personal Details</h2>
                <div className="flex gap-10">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="phone-number"
                      value={details.phoneNumber}
                      onChange={(e) =>
                        setDetails({ ...details, phoneNumber: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Address
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="address"
                      value={details.address}
                      onChange={(e) =>
                        setDetails({ ...details, address: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="flex flex-col gap-24 items-center">
                <h2 className="text-3xl font-bold">Confirmation</h2>
                <div className="flex gap-10">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nationality
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="nationality"
                      value={details.nationality}
                      onChange={(e) =>
                        setDetails({ ...details, nationality: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      City
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="city"
                      value={details.city}
                      onChange={(e) =>
                        setDetails({ ...details, city: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row-reverse gap-10">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleNext}
            >
              {currentStep === 4 ? "Finalize" : "Next"}
            </button>
            <button
              type="button"
              className="text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              onClick={handlePrevious}
            >
              Previous
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Stepper;
