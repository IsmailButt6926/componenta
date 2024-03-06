import React from 'react'

type Props = {}

const GridPractise = (props: Props) => {
    const array1 = [
        { songName: "Still Rollin", artistName: "Shubh", artistFanFollwing: 1000 },
        { songName: "Hobbies", artistName: "Atif Aslam", artistFanFollwing: 2000 },
        { songName: "Pasoori", artistName: "Neeru bajwa", artistFanFollwing: 3000 },
        { songName: "Smack that", artistName: "Arjit singh", artistFanFollwing: 4000 }
    ]

    const array2 = [
        { title: "Subscriber", followers: 14 },
        { title: "Revenue", followers: 120000 },
        { title: "Live Court", followers: 5000 },
        { title: "Product Sales", followers: 75000 },
        { title: "Website Visits", followers: 1000000 },
        { title: "Customer Satisfaction", followers: 0.95 },
        { title: "Employee Court", followers: 120 },
    ]

    return (
        <>

            {/* <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 m-4'>
             <div className='h-24 bg-orange-500 rounded-md'></div>
             <div className='h-24  bg-teal-500 rounded-md'></div>
             <div className='h-24  bg-red-500 rounded-md'></div>
             <div className='h-24  bg-purple-500 rounded-md'></div>
         </div> */}

            {/* <div className='grid grid-cols-1 sm:grid-cols-12 gap-4 m-4'>
             <div className='h-24 bg-orange-500 rounded-md sm:col-span-2'></div>
             <div className='h-24  bg-teal-500 rounded-md sm:col-span-10'></div>
         </div> */}

            {/* <div className='grid  sm:grid-cols-12 gap-4 m-4'>
<div className='h-24 bg-orange-500 rounded-md sm:col-span-2 hidden sm:block'></div>
             <div className='h-24  bg-teal-500 rounded-md sm:col-span-8'></div>
             <div className='h-24  bg-red-500 rounded-md sm:col-span-2 hidden sm:block'></div>
         </div> */}

            {/* <div className='grid gap-4 m-4 sm:grid-cols-3'>
                <div className='h-24 bg-orange-500 rounded-md '></div>
                <div className='h-24 bg-teal-500 rounded-md '></div>
                <div className='h-24 bg-red-500 rounded-md '></div>
            </div> */}

            {/* {
                array1?.map((item) => {
                    return (
                        <div className='border-2 rounded-md m-4 py-4 px-2 grid gap-4 sm:grid-cols-6 lg:grid-cols-12'>
                            <div className='h-10  rounded-md sm:col-span-7'>
                                <div className='flex flex-col ml:0 sm:ml-24'>
                                    <h2 className='text-xl font-bold'>Still Rollin</h2>
                                    <h2>Shubh</h2>
                                </div>
                            </div>
                            <div className='h-10 bg-[#F4F4F4] border rounded-full sm:col-span-2 flex items-center justify-center  '>
                                €1114.71K - €1507.96K
                            </div>
                            <div className='h-10 bg-[#F4F4F4] rounded-full sm:col-span-2 flex items-center justify-center '>
                                €1114.71K - €1507.96K
                            </div>
                            <div className='h-10  rounded-md sm:col-span-1 flex items-center justify-center'>4</div>
                        </div>
                    )
                })
            } */}

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-3'>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center '>Video 1</div>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center '>Video 2</div>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center '>Video 3</div>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center'>Video 4</div>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center'>Video 5</div>
                <div className=' h-36  bg-[#F4F4F4] flex items-center justify-center'>Video 6</div>
            </div> */}

            <div className='grid gap-4 sm:col-span-12 m-10'>
                <div className='h-24 bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
                <div className='h-24 bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
                <div className='h-24  bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
                <div className='h-24  bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
                <div className='h-24  bg-[#F4F4F4] rounded-md sm:col-span-2'></div>
                <div className='h-24  bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
                <div className='h-24  bg-[#F4F4F4] rounded-md sm:col-span-1'></div>
            </div>

        </>
    )
}

export default GridPractise  