import React, { Fragment, useState, useEffect } from 'react'
import { IoIosNotifications } from "react-icons/io";
import { Menu, Transition } from '@headlessui/react'
import { getAllNotification, getNotification } from "../services/notification"
import { useQuery } from 'react-query';
import InfinitScroll from './InfinitScroll';
type Props = {}

const Notification = (props: Props) => {
    // this notfication is designed because i want to call the api on scroll so i used react-infinite scrool component libraray
    const [notifications, setNotifications] = useState([])
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    const [recordsPerPage, setRecordsPerPage] = useState(10);

    useEffect(() => {
        console.log("currentPage", currentPage)
    }, [currentPage])

    const { refetch: allNotification } = useQuery(["notification"], () => getNotification(`notifications`), {
        onSuccess(data) {
            setCount(data?.data?.count)
        },
    })




    const { data, isLoading, refetch } = useQuery(["notifications"], () => getAllNotification(`notifications?_page=${currentPage}&_per_page=${recordsPerPage}`), {
        enabled: false,
        onSuccess(data) {
            // console.log("Data", data)
            // setCount(data?.data?.length)
            setNotifications(data?.data)
        },
    })

    console.log("count", count)

    useEffect(() => {
        refetch()
    }, [currentPage, recordsPerPage])

    // const chek = notifications?.length < count
    // console.log("chek", chek)

    return (
        <div className='flex justify-center mt-10 gap-5 items-center'>
            <h2 className='text-lg'>Check all the Notifications</h2>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="border  border-solid border-[#E0E0E0] rounded-xl  capitalize flex items-center justify-center gap-3  h-12  bg-white  px-4 py-2  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <IoIosNotifications className='w-5 h-5' />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute -right-3 mt-2 w-60 overflow-y-auto border border-solid  border-[#E0E0E0] rounded-xl overflow-hidden origin-top-right  bg-white"
                        style={{
                            boxShadow: "0px 10px 20px #00000014"
                        }}
                    >
                        <InfinitScroll items={notifications?.map((item: any) => {
                            return (
                                <>
                                    <Menu.Item
                                        as={"div"}
                                        className="bg-white text-[#000000CC] cursor-pointer py-3 pl-5 text-base font-normal hover:bg-gray-300"
                                    >
                                        {item?.message}
                                    </Menu.Item>
                                </>
                            )
                        })}
                            next={() => setCurrentPage(currentPage + 1)}
                            notificationLength={notifications?.length}
                            height={"250px"}
                            hasMore={notifications?.length < count}
                            refreshFunction={() => console.log("refresh")}
                        />

                    </Menu.Items>
                </Transition>
            </Menu>

        </div>

    )
}

export default Notification