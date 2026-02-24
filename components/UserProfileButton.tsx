"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { UserProfileDropdown } from "./UserProfileDropdown";

export interface UserProfileButtonProps {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export function UserProfileButton({
    name,
    email,
    image,
}: UserProfileButtonProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
                onClick={handleToggleDropdown}
            >
                {image ? (
                    <Image
                        src={image}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                ) : (
                    <FaRegUserCircle className="text-4xl text-gray-400" />
                )}
                <p className="text-gray-300">{name || "Guest"}</p>
                {!isOpen ? (
                    <IoIosArrowDown className="text-gray-300" />
                ) : (
                    <IoIosArrowUp className="text-gray-300" />
                )}
            </button>
            {isOpen && <UserProfileDropdown />}
        </div>
    );
}
