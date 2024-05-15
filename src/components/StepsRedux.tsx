import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stepDown, stepUp } from '../features/StepSlice'

const StepsRedux = () => {
    const dispatch = useDispatch()

    const currentStep = useSelector((state: any) => state?.currentStep)

    const handleSubmit = () => {
        if (currentStep >= 5) {
            return
        }
        dispatch(stepUp())
    }
    return (
        <div>
            {
                currentStep === 1 ? (
                    <div className='border border-gray-700 rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                        <h2 className='font-bold text-2xl'>Enter your Name</h2>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="John" required />
                    </div>
                ) : currentStep === 2 ? (
                    <div className='border border-gray-700 rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                        <h2 className='font-bold text-2xl'>Enter your Email</h2>
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your email" required />
                    </div>
                ) : (currentStep === 3) ? (
                    <>

                        <div className='border border-gray-700 rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-2xl'>Enter your Age</h2>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your age" required />
                        </div>

                    </>

                ) : currentStep === 4 ? (
                    <div className='border border-gray-700 rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                        <h2 className='font-bold text-2xl'>Enter your Phone number</h2>
                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your phone number" required />
                    </div>
                ) : currentStep === 5 ? (
                    <div className='border border-gray-700 rounded-xl mt-16 py-10 flex flex-col justify-center items-center gap-3'>
                        <h2 className='font-bold text-2xl'>Enter your Address</h2>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Enter your address" required />
                    </div>
                ) : ""
            }


            <div className='flex gap-4 justify-end mt-4'>
                <button className='bg-gray-400 text-white px-3 py-4 rounded-md' disabled={currentStep === 1} onClick={() => dispatch(stepDown())}>Cancel</button>
                <button className='bg-black text-white px-3 py-4 rounded-md' onClick={() => handleSubmit()}>{currentStep === 5 ? "Finalize" : "Next"}</button>
            </div>

        </div>
    )
}

export default StepsRedux