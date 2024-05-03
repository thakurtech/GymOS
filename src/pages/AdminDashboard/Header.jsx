import React, { useState } from 'react';
import { AiFillBell } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';

const Header = ({ toggleSidebar,sidebarCollapsed }) => {
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
 
    const openUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    return (
        <header className="h-[9vh]  bg-gray-100 top-0 w-full fixed shadow">
            <div className="flex justify-between items-center px-10 h-14">
                <div className="flex justify-between items-center gap-x-14">
                    <div className="w-40">
                        <h2 className="text-md font-bold"> Unisex Gym  </h2>
                        <p className="text-gray-400 text-[12px]"> Admin Dashboard </p>
                    </div>
                    <a id="toggle-button" className="hidden lg:block bg-gray-200 rounded-full transition-all duration-500 ease-in-out" onClick={toggleSidebar} href="#">
                        <FaArrowLeft className={` ${ sidebarCollapsed ? "rotate-180" : "rotate-0" } `}  />
                    </a>
                </div>
                <ul className="flex items-center gap-5">
                        <a className=" text-xl rounded-sm" href="#">
                            <AiFillBell />
                        </a>
                        <FaCircleUser className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer" onClick={openUserDropdown} />
                    <ul id="user-dropdown" className={`absolute ${userDropdownOpen ? 'block' : 'hidden'} bg-white right-4 top-14 w-28 rounded shadow-md`}>
                        <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2" href="#">Profile</a></li>
                        <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2" href="#">Settings</a></li>
                        <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2" href="#">Logout</a></li>
                    </ul>
                </ul>
            </div>
        </header>
    );
};

export default Header;
