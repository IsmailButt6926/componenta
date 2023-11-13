/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

type tableProps = {
    header: any[],
    data?: any[],
    isViewAble?: boolean,
    isEditAble?: boolean,
    isDeleteAble?: boolean,
    onRowClick?: any
}

const Table = (props: tableProps) => {
    const {
        header,
        data,
        isViewAble = false,
        isEditAble = false,
        isDeleteAble = false,
        onRowClick = () => { null }
    } = props


    return (

        <div className='border-2 border-solid border-gray-500 rounded-md overflow-hidden mt-7 mx-4'>
            <table className='w-full text-base text-left text-gray-700'>
                <thead className='uppercase bg-[#FAFAFA] '>
                    <tr>
                        {header?.map((item, index) => (
                            <th className='py-3 px-6 '>{item}</th>

                        ))}
                        {
                            (isViewAble || isEditAble || isDeleteAble) &&
                            < th className='py-3 px-6 '>Action</th>
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((item, index) => (
                            <tr className='bg-white border-b cursor-pointer hover:bg-blue-200' key={index} onClick={() => onRowClick(item)}>
                                <td className='py-3 px-6 '>{item?.id}</td>
                                <td className='py-3 px-6 '>{item?.name}</td>
                                <td className='py-3 px-6 '>{item?.email}</td>
                                <td className='py-3 px-6 '>{item?.phone}</td>
                                {
                                    (isViewAble || isEditAble || isDeleteAble) &&
                                    <td className='py-3 px-6 text-white '>
                                        {
                                            isViewAble &&
                                            <button className='bg-blue-500 px-3 py-2 rounded-md mr-2'>View</button>
                                        }
                                        {
                                            isEditAble &&
                                            <button className='bg-green-700 px-3 py-2 rounded-md mr-2'>Edit</button>
                                        }
                                        {
                                            isDeleteAble &&
                                            <button className='bg-red-500 px-3 py-2 rounded-md'>Delete</button>
                                        }
                                    </td>
                                }


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Table