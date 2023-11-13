/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFillArrowLeftSquareFill, BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillEnvironment, AiFillAlert, AiFillAmazonCircle, AiFillCrown, AiFillCopy, AiFillDollarCircle } from "react-icons/ai";

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(true)
  const [openDropDown ,setOpenDropDown] = useState(false)

  const MenuItems = [
    { label: "Dashboard", icon: <RiDashboardFill /> },
    { label: "Pages", icon: <AiFillAlert /> },
    { label: "Media", icon: <AiFillAmazonCircle />, spacing: true },
    { label: "Project",
     icon: <AiFillCrown />, 
     icon2: <BsChevronDown />,
    subMenuItems: [{title:"Submenu 1"}, {title:"Submenu 2"}, {title:"Submenu 3"}]
   },

    { label: "Profile", icon: <AiFillCopy /> },
    { label: "Logout", icon: <AiFillDollarCircle /> },


  ]

  return (
    <div className={`${openSideBar ? "w-72" : "w-20"} bg-dark-purple text-white h-screen p-5 pt-8  relative transition-all duration-300 ease-in-out`}>

      <BsFillArrowLeftSquareFill className='absolute -right-2  text-2xl border border-dark-purple rounded-full' onClick={() => setOpenSideBar(!openSideBar)} />

      <div className='inline-flex items-center '>
        <AiFillEnvironment className='text-4xl bg-yellow-400 text-black rounded-sm mr-5' />
        <h1 className={`text-2xl font-semibold ${!openSideBar && "hidden"}`}>Tailwind</h1>
      </div>

      <div className={`mt-10 flex items-center bg-light-white rounded-md px-4 py-2 ${!openSideBar && "pl-2"}`}>
        <BsSearch className={`${!openSideBar ? "-mr-3" : "mr-5 "} text-xl`} />
        <input className={`text-black focus:outline-none bg-transparent ${!openSideBar && "hidden"}`} />
      </div>

      <ul className='mt-5 '>
        {/* 
          <li className='flex items-center hover:bg-light-white rounded-md p-2'>
          <RiDashboardFill className={` ${!openSideBar ? "-mr-3" :"mr-5 "} text-2xl `}/>
          <h2 className={`${!openSideBar && "hidden"}`}>Dashboard</h2>
          </li> */}

        {
          MenuItems.map((item, index) => (
            <>
            <li className={`text-gray-300 p-2 hover:bg-light-white rounded-md flex items-center gap-x-4 ${item?.spacing ? "mt-9 " : "mt-2"}`} key={index}>
              <span className={` ${!openSideBar ? "-mr-3" : "mr-5 "} text-2xl `}>{item?.icon}</span>
              <h2 className={`${!openSideBar && "hidden"} cursor-pointer`}>{item?.label}</h2>

              {item?.icon2 &&
                <span
                  className={`${!openSideBar && "hidden"} absolute right-8 text-green-600 cursor-pointer`}
                  onClick={() => setOpenDropDown(!openDropDown)}
                  >
                  {item?.icon2}
                </span>
              }
            </li>

              
              {
                openDropDown && 
                <ul>
                  {
                    item?.subMenuItems?.map((element,index) => (
                      <li  className={`text-gray-300 p-2 hover:bg-light-white rounded-md flex items-center gap-x-4 px-5 `} key={index}>
                      <h2 className={`${!openSideBar && "hidden"} cursor-pointer`}>{element?.title}</h2>
              

                    </li>
                    ))
                  }
                
                </ul>
              }
      
            </>
          ))
        }

      </ul>

    </div>
  )
}

export default Sidebar
// {
//   openSubMenu && (
//       <ul>
//           {item?.subMenuItems?.map((element, index) => (
//               <li
//                   className={`text-gray-300 p-2 hover:bg-light-white rounded-md flex items-center gap-x-4 px-5`}>
//                   {element?.title}
//               </li>
//           ))}
//       </ul>
//   )
// }