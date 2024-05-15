import React, { useEffect, useState } from 'react'

type Props = {}

const Rating = (props: Props) => {

    const [svgData, setSvgData] = useState<any>([
        {color : "text-yellow-300"},
        { color: "text-gray-500" },
        { color: "text-gray-500" },
        { color: "text-gray-500" },
        { color: "text-gray-500" },
    ])
    useEffect(() =>{
        console.log("svgData", svgData)
    }, [svgData])
    const handleRating = (index:number ) => {
        const updatedSvg = svgData.map((item,itemIndex) => {
            if(index > itemIndex) {
                if(item.color != "text-yellow-300") {
                    return { color: "text-yellow-300" }
                }
            } else if (index < itemIndex) {
                if (item.color != "text-gray-500") {
                    return { color: "text-gray-500" }
                }
            }
            if(index === itemIndex){
                if(item?.color != "text-yellow-300") {
                    console.log("first")
                    return { color: "text-yellow-300"}
                } else {
                    console.log("second")
                    return { color: "text-gray-500" }
                }
            }else {
                return item
            }
        })
        setSvgData(updatedSvg)
    }
    
  return (
    <div className='flex item-center justify-center mt-10'>
        {
            svgData.map((item,index) => (
          <svg className={`w-9 h-9 ${item?.color} ms-1 cursor-pointer`} onClick={() => handleRating(index)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
            ))
        }
    </div>
  )
}

export default Rating