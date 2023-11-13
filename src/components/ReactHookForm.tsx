//in this form i have used react-hook-form library for input validation
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"

const ReactHookForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm<any>();

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        message: ""
    })

    const onSubmit = (data: any) => {
        console.log("data", data)
        reset()
    }

    const onError = (errors: any) => {
        console.log("onerror", errors)
    }
    console.log("errors", errors)
    console.log("watch", watch())

    return (

        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className='grid gap-6 md:grid-cols-2'>
                <div className='flex flex-col gap-3'>
                    <label className='text-lg font-semibold capitalize'>first name</label>
                    <input type='text' {...register("name", { required: "Name is Required" })} onKeyUp={() => trigger("name")} className={`border ${errors.name && "border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-0"} border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-1 w-96 pl-3`} placeholder='Ismail' />
                    {errors.name && (<span className='text-red-500'>{errors?.name?.message}</span>)}
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-lg font-semibold capitalize'>last name</label>
                    <input type='number' {...register("age", { required: "Age is Required", min: { value: 12, message: "Minimum age is 12" }, max: { value: 20, message: "Maximum age is 20" } })} onKeyUp={() => trigger("age")} className={`border ${errors.age && "border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-0"}  border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none`} placeholder='Butt' />
                    {errors.age && (<span className='text-red-500'>{errors?.age?.message}</span>)}

                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-lg font-semibold capitalize'>email</label>
                    <input type='text' {...register("email", { required: "Email is Required", pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Invalid email address" } })} onKeyUp={() => { trigger("email") }} className={`border ${errors.email && "border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-0"}  border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none`} placeholder='ismail@12gmail.com' />
                    {errors.email && (<span className='text-red-500'>{errors?.email?.message}</span>)}
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-lg font-semibold capitalize'>phone number</label>
                    <input type='text' {...register("phone", { required: "Phone number is Required", pattern: { value: /^((\0)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/, message: "Inavlid phone number" } })} onKeyUp={() => trigger("phone")} className={`border ${errors.phone && "border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-0"} border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none`} placeholder='phone ' />
                    {errors.phone && (<span className='text-red-500'>{errors?.phone?.message}</span>)}

                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-lg font-semibold capitalize'>Message</label>
                    <textarea {...register("message", { required: "Message is Required", minLength: { value: 10, message: "Minimum length is 10" }, maxLength: { value: 20, message: "Maximum length is 20" } })} onKeyUp={() => trigger("message")} className={`border ${errors.message && "border-red-500  focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-0"} border-gray-300 bg-gray-50 rounded-lg py-1 w-96 pl-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none`}></textarea>
                    {errors.message && (<span className='text-red-500'>{errors?.message?.message}</span>)}

                </div>

            </div>


            <button className='mt-8 bg-blue-700 hover:bg-blue-800 w-36 px-4 py-2.5 rounded-md text-white'>Submit</button>
        </form>
    )
}

export default ReactHookForm