import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface RootState {
    currentStep: number
}

const Header = () => {

    const currentStep = useSelector((state: RootState) => state?.currentStep)

    return (
        <div>
            <nav className="border-gray-200 bg-gray-900 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='bg-white text-black font-medium px-2 py-4 rounded-lg w-28 flex justify-center' >Step {currentStep}/5</div>
                </div>
            </nav>
        </div>
    )
}

export default Header