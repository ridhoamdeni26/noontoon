import React, { useRef, useState } from "react";
import Dropdown from "@/Components/Dropdown";

export default function Topbar({ name }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>

                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="ml-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button">
                                    <img
                                        src="/images/avatar.png"
                                        className="rounded-full object-cover w-full"
                                        alt=""
                                    />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
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
            <style jsx="true">{`
                .top-search {
                    background-image: url("/icons/ic_search.svg");
                }
            `}</style>
        </div>
    );
}
