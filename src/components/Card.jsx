/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = (props) => {
    const {cardItems,onDelete}=props


  return (
    <div className='max-w-sm border border-gray-200 rounded-lg shadow'>
        <img src={cardItems?.imageSrc} className='rounded-t-lg'/>

        <div className='p-5'>
            <h2 className='text-lg font-bold text-purple-500'>{cardItems?.photoGrapher}</h2>
            <ul className='pt-4'>
                <li>
                    <strong>Id: </strong>
                    {cardItems?.id}
                </li>
                <li>
                    <strong>View: </strong>
                    {cardItems?.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {cardItems?.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {cardItems?.likes}
                </li>
            </ul>

            <div className='pt-3 flex gap-4'>
                {
                    cardItems?.tags?.map((element,index) => (
                        <span className='bg-[#dddada] p-2 rounded-2xl' key={index}>{element}</span>
                    ))
                }
            </div>
            <div onClick={() => onDelete(cardItems?.id)}>Delete</div>
        </div>
    </div>
  )
}

export default Card