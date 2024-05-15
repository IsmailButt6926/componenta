import React, { useEffect, useState } from 'react'

type Props = {}

const NewSteps = (props: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(1)

    const [showMore, setShowMore] = useState({
        lastName: false,
        Email: false
    })

    const handleCancel = () => {
        if (currentStep === 1 && showMore?.lastName) {
            setShowMore({ ...showMore, lastName: false })
            return
        }
        if (currentStep === 1 && !showMore?.lastName && showMore?.Email) {
            setShowMore({ lastName: true, Email: false })
            return
        }
        setCurrentStep(currentStep - 1)
    }

    const handleSubmit = () => {
        if (currentStep === 1 && !showMore?.lastName && !showMore?.Email) {
            setShowMore({ ...showMore, lastName: true })
            return
        }
        if (currentStep === 1 && showMore?.lastName && !showMore?.Email) {
            setShowMore({ lastName: false, Email: true })
            return
        }
        setCurrentStep(currentStep + 1)
    }

    return (
        <div>
            <div className=' px-2 py-4 rounded-lg mt-10  flex justify-center'>
                <span className='text-white bg-green-600 text-center px-4 py-3 rounded-md'>Steps: {currentStep}/5</span>
            </div>

            {
                (currentStep === 1 && !showMore?.lastName && !showMore?.Email) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 bg-gray-700 text-white shadow-md rounded-xl mt-16 px-14 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your First Name</h2>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="first name" required />
                        </div>
                    </div>
                ) : (currentStep === 1 && showMore?.lastName && !showMore?.Email) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 shadow-md bg-gray-700 text-white rounded-xl mt-16 px-14 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Last Name</h2>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="last name" required />
                        </div>
                    </div>
                ) : (currentStep === 1 && showMore?.Email && !showMore?.lastName) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 shadow-md bg-gray-700 text-white px-14  rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Email</h2>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your email" required />
                        </div>
                    </div>
                ) : (currentStep === 2) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 shadow-md bg-gray-700 text-white rounded-xl mt-16 px-14 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your City</h2>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="city" required />
                        </div>
                    </div>
                ) : (currentStep === 3) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 shadow-md  bg-gray-700 text-white rounded-xl mt-16 px-14 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Age</h2>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your age" required />
                        </div>
                    </div>
                ) : (currentStep === 4) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700 shadow-md bg-gray-700 text-white rounded-xl mt-16 px-14 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Phone number</h2>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your phone number" required />
                        </div>
                    </div>
                ) : (currentStep === 5) ? (
                    <div className='mx-auto flex justify-center '>
                        <div className='border border-gray-700  bg-gray-700 text-white shadow-md rounded-xl mt-16 py-10 px-14 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Address</h2>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your address" required />
                        </div>
                    </div>
                ) : ""
            }


            {/* <div className='mx-auto flex justify-center '>
                <div className='border border-gray-700 shadow-md bg-gray-700 text-white px-14  rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                    <h2 className='font-bold text-2xl'>Enter your Email</h2>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your email" required />
                </div>
            </div>  */}



            <div className='flex gap-4 justify-end mt-4 mr-4'>
                <button className='bg-gray-400 text-white px-3 py-4 rounded-md' disabled={currentStep === 1 && !showMore?.lastName && !showMore?.Email} onClick={() => handleCancel()}>Cancel</button>
                <button className='bg-black text-white px-3 py-4 rounded-md' disabled={currentStep === 5} onClick={() => handleSubmit()}>{currentStep === 5 ? "Finalize" : "Next"}</button>
            </div>
        </div>
    )
}

export default NewSteps