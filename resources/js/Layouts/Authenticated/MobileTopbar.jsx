import React, { useRef, useState } from "react";
import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Layouts/Authenticated/Sidebar";
import MenuItem from "@/Components/MenuItem";
import { UserMenu, UserOther } from "./MenuList";

function MobileTopbar({ name, auth }) {
    const role = auth.user.roles[0]?.name;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-black btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content dark:bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {UserMenu.map(
                                (menu, index) =>
                                    role === "user" && (
                                        <MenuItem
                                            key={`${index}-${menu.text}`}
                                            link={menu.link}
                                            icon={menu.icon}
                                            text={menu.text}
                                            isActive={
                                                menu.link &&
                                                route().current(menu.link)
                                            }
                                        />
                                    )
                            )}

                            {UserOther.map((menu, index) => {
                                const link =
                                    role === "admin" && menu.linkadmin
                                        ? menu.linkadmin
                                        : menu.link;

                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={link && route().current(link)}
                                    method={menu.method}
                                />;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <span className="text-black text-sm font-bold pr-4">
                        Welcome, {name}
                    </span>
                    <div className="relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="outline outline-2 outline-gray-300 p-2 rounded-full w-16 h-16 flex items-center justify-center bg-gray-200">
                                    <img
                                        src="/images/avatar.png"
                                        className="rounded-full object-cover w-full h-full"
                                        alt="User Avatar"
                                    />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                <Dropdown.Link
                                    href=""
                                    method="post"
                                    as="button"
                                >
                                    Dashboard
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href=""
                                    method="post"
                                    as="button"
                                >
                                    Settings
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Sign Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileTopbar;
