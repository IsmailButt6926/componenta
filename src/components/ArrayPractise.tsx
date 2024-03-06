import React, { useEffect, useState } from 'react'
import Select from "react-select"
import { countriesOptions } from '../services/option'

type Props = {}

const ArrayPractise = (props: Props) => {
    const [favouriteCountries, setFavouriteCountries] = useState<any>([])
    const [favCountrys, setFavCountrys] = useState<any>([])

    const handleAddCountries = (item) => {
        setFavouriteCountries((prev) => [...prev, item])
    }

    const handleRemove = (itemToRemove) => {
        const newArray = favouriteCountries.filter((item) => item.value !== itemToRemove.value)
        setFavouriteCountries(newArray)
    }

    return (
        <>
            <div className='m-10 w-full'>
                <h2>Select any of your fav countries</h2>
                <div className='border-2 h-20 rounded-2xl flex items-center gap-3 p-2 mr-20'>
                    {
                        countriesOptions?.map((item, index) => {
                            return (
                                <span className={`border px-10 ${favouriteCountries?.includes(item) && "bg-black text-white"} text-center rounded-md py-2 cursor-pointer text-gray-500`}
                                    onClick={() => {
                                        handleAddCountries(item)
                                        setFavCountrys((prev) => [...prev, item?.value])
                                    }}
                                >
                                    {item?.label}
                                </span>
                            )

                        })
                    }
                </div>
            </div>

            {
                favouriteCountries?.map((item, index) => {
                    return (
                        <div className='border-2 m-10 rounded-lg flex items-center  justify-center gap-5 w-44 h-10'>
                            <span>{item?.label}</span>
                            <svg
                                height="20px"
                                id="Layer_1"
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="12px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                onClick={() => handleRemove(item)}
                            >
                                <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                            </svg>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ArrayPractise