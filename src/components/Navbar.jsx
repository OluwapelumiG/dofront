import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import Logo from '../assets/images/logo.png';

export function Navbar() {
        // {name: "Later", icon: "arrow-redo-outline", dis: "translate-x-48"}, 64
    const Menus = [
        {name: "Home", to:"/", icon: "home-outline", mobdis: "translate-x-0", tabdis: "translate-x-0", deskdis: "translate-x-0"},
        {name: "Tasks", to:"/tasks", icon: "list-outline", mobdis: "translate-x-16", tabdis: "translate-x-16", deskdis: "translate-x-[8rem]"},
        {name: "Active", to:"/active", icon: "timer-outline", mobdis: "translate-x-32", tabdis: "translate-x-32", deskdis: "translate-x-[16rem]"},
        {name: "Done", to:"/done", icon: "checkmark-done-outline", mobdis: "translate-x-48", tabdis: "translate-x-48", deskdis: "translate-x-[24rem]"},
    ];

    const [active, setActive] = useState(0);
    const activate = (isActive, path) => {
        if (isActive) {
            setActive(path)
        }
    }

    return (
        <div>
            <div className="bg-gray-900 w-full h-[110px] rounded-b-md">
                {/* Top Navigation */}
                <nav className="bg-white shadow-md w-full fixed top-0 left-0 flex justify-between">
                    <div className="flex h-12 cursor-pointer">
                        <img src={Logo} alt="Logo" className="flex-col w-16 m-2"/>
                        <span className="flex-col text-xl p-2">DoApp  </span>
                    </div>
                    {/* Desktop Navigation */}
                    <span className="w-full h-3 bg-gray-900 absolute -bottom-3 rounded-b-md"></span>
                    <ul className={"tablet:flex hidden items-center pr-8"}>
                    <span
                        className={`bg-gray-900 duration-500 ${Menus[active].deskdis} border-4 border-gray-900 h-16 w-32 absolute bottom-0 rounded-full`}>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -left-[24px] rounded-br-[15px] shadow-desktopShadow1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -left-1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -right-1"></span>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -right-[24px] rounded-bl-[15px] shadow-desktopShadow2"></span>
                    </span>
                        {
                            Menus.map((menu, i) => (
                                <li key={i} className="w-32">
                                    <NavLink to={menu.to}
                                             className={` ${(activeNav) => activate(activeNav.isActive, i)} flex flex-col text-center pt-6`}
                                             onClick={() => setActive((i))}>
                                    <span className={`text-xl cursor-pointer duration-500 `}>
                                        <span className={` ${i === active && "-mt-5 text-white"} `}>
                                            <ion-icon name={menu.icon}></ion-icon>
                                        </span>
                                        {i !== active && <span className=" text-xl pb-2"> {menu.name}</span>}
                                    </span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Tablet Navigation */}
                    <ul className={"mobile:flex tablet:hidden hidden items-center pr-8"}>
                    <span
                        className={`bg-gray-900 duration-500 ${Menus[active].tabdis} border-4 border-gray-900 h-16 w-16 absolute bottom-0 rounded-full`}>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -left-[24px] rounded-br-[15px] shadow-desktopShadow1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -left-[4px]"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -right-[4px]"></span>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -right-[24px] rounded-bl-[15px] shadow-desktopShadow2"></span>
                    </span>
                        {
                            Menus.map((menu, i) => (
                                <li key={i} className="w-16">
                                    <NavLink to={menu.to} className="flex flex-col text-center pt-6"
                                             onClick={() => setActive((i))}>
                                        <span
                                            className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"} `}><ion-icon
                                            name={menu.icon}></ion-icon></span>
                                        <span
                                            className={` ${active === i ? 'translate-y-4 duration-700 opacity-100 text-white' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {/* Mobile / Bottom Navigation */}
                <div className="fixed w-[370px] object-bottom bottom-0 mobile:hidden">
                    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
                        <ul className="inline-flex relative m-auto">
                        <span
                            className={`bg-rose-600 duration-500 ${Menus[active].mobdis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}>
                            <span
                                className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-mobileShadow1"></span>
                            <span
                                className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-mobileShadow2"></span>
                        </span>
                            {
                                Menus.map((menu, i) => (
                                    <li key={i} className="w-16">
                                        <NavLink to={menu.to} className="flex flex-col text-center pt-6"
                                                 onClick={() => setActive((i))}>
                                            <span
                                                className={`text - xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"} `}><ion-icon
                                                name={menu.icon}></ion-icon></span>
                                            <span
                                                className={` ${active === i ? 'translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}