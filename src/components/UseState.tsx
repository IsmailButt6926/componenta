import React, { useState } from 'react'

type Props = {}

interface UserInputType {
    username: string,
    password: string
}

const UseState = (props: Props) => {
    const [userInput, setUserInput] = useState<UserInputType>({ username: "", password: "" })

    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }
    console.log("userInput", userInput)
    return (
        <div>
            <h3>Email</h3>
            <input type='text' className='border-black border' name='username' value={userInput.username} onChange={handleChange} />

            <h3>Password</h3>
            <input type='password' className='border border-black' name='password' value={userInput.password} onChange={handleChange} />

        </div>
    )
}

export default UseState