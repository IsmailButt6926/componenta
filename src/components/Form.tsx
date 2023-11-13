/* eslint-disable no-unused-vars */
//in this form i have used custom validation for input feilds
import React, { useState, useEffect } from 'react'

const Form = () => {
    const [personalInfo, setPersonalInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
    })


    const [data, setData] = useState<any>([])
    const [validationErrors, setValidationErrors] = useState<any>({});
    const [checkFormSubmit, setCheckFormSubmit] = useState(false)


    const handleChange = (e: any) => {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        })

    }

    const validateForm = () => {
        const errors: any = {}
        if (personalInfo?.fname === "") {
            errors.fname = "First name is required"
        }
        if (personalInfo?.lname === "") {
            errors.lname = "Last name is required"
        } else {
            let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
            if (!regex.test(personalInfo?.email)) {
                errors.email = "Email not valid"
            }
        }
        if (personalInfo?.email === "") {
            errors.email = "email is required"
        }
        if (personalInfo?.phone === "") {
            errors.phone = "Phone name is required"
        } else if (personalInfo?.phone.length < 11) {
            errors.phone = "phone num length must be equal to 11"
        }
        if (personalInfo?.password.length < 6) {
            errors.password = "Password length must be greater then 6"
        }

        setValidationErrors({ ...errors })

        const hasErrors = Object.keys(errors).length > 0;

        return !hasErrors;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let validate = validateForm()

        console.log("validate", validate)
        if (validate) {
            alert("Form submited")
        } else {
            alert("In-valid form")
        }

        setData([...data, personalInfo])
        setCheckFormSubmit(true)
    }

    useEffect(() => {
        setPersonalInfo({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            password: ""
        })
    }, [checkFormSubmit])

    useEffect(() => {
        // Remove the validation error when the user enters text in an input field
        const updatedValidationErrors = { ...validationErrors };
        Object.keys(updatedValidationErrors).forEach((fieldName) => {
            if (personalInfo[fieldName] !== "") {
                updatedValidationErrors[fieldName] = undefined;
            }
        });
        setValidationErrors(updatedValidationErrors);
    }, [personalInfo]);

    useEffect(() => {
        console.log("validationErrors", validationErrors)
    }, [validationErrors])

    return (
        <>
            <form>
                <div className='grid gap-6 md:grid-cols-2'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold capitalize'>first name</label>
                        <input type='text' name='fname' value={personalInfo?.fname} onChange={handleChange} className='border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-1 w-96 pl-3' placeholder='Ismail' />
                        {validationErrors?.fname &&
                            <span className='text-red-600'>{validationErrors?.fname}</span>
                        }
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold capitalize'>last name</label>
                        <input type='text' name='lname' value={personalInfo?.lname} onChange={handleChange} className='border border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none' placeholder='Butt' />
                        {validationErrors?.lname &&
                            <span className='text-red-600'>{validationErrors?.lname}</span>
                        }

                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold capitalize'>email</label>
                        <input type='email' name='email' value={personalInfo?.email} onChange={handleChange} className='border border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none' placeholder='ismail@12gmail.com' />
                        {validationErrors?.email &&
                            <span className='text-red-600'>{validationErrors?.email}</span>
                        }

                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold capitalize'>phone number</label>
                        <input type='tel' name='phone' value={personalInfo?.phone} onChange={handleChange} className='border border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none' placeholder='phone ' />
                        {validationErrors?.phone &&
                            <span className='text-red-600'>{validationErrors?.phone}</span>
                        }
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold capitalize'>password</label>
                        <input type='password' name='password' value={personalInfo?.password} onChange={handleChange} className='border border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none' placeholder='password' />
                        {validationErrors?.password &&
                            <span className='text-red-600'>{validationErrors?.password}</span>
                        }
                    </div>

                </div>


                <button className='mt-8 bg-blue-700 hover:bg-blue-800 w-36 px-4 py-2.5 rounded-md text-white' onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Form