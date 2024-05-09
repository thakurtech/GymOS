import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoIosHome } from 'react-icons/io';
import { PiUsersThreeFill } from 'react-icons/pi';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Sidebar = ({ sidebarCollapsed}) => {
    const sidebarItems = [
        { icon: <IoIosHome />, text: 'Dashboard' },
        { icon: <GoGraph />, text: 'Reports' },
        { icon: <PiUsersThreeFill />, text: 'Users' }
    ];

    return (
        <div className={`mt-14   `}>
            <aside id="sidebar" className={`h-[90vh]  whitespace-nowrap fixed shadow overflow-x-hidden transition-all duration-500 ease-in-out ${sidebarCollapsed ? 'lg:w-[60px]' : 'lg:w-[240px]'}`}>
                <div className="flex flex-col  justify-between h-full">
                    <ul className="flex flex-col gap-1 mt-2">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                                <a className='w-full flex items-center px-4 py-3 ' href="#">
                                    {item.icon}
                                    <span className={`whitespace-nowrap pl-1 ${sidebarCollapsed? "hidden": "block"}`}>{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col gap-1 mt-2">
                        <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                            <a className="w-full flex px-4 items-center py-3" href="logout">
                                <RiLogoutBoxRLine />
                                <span className={`whitespace-nowrap pl-1 ${sidebarCollapsed? "hidden": "block"}`}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
