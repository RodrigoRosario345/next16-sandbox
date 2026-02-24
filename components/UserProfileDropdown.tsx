import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LogoutButton } from "./LogoutButton";

const Options_UserProfile = [
    {
        label: "Profile",
        icon: <FaUser />,
        href: "/profile",

    },
    {
        label: "Settings",
        icon: <IoSettings />,
        href: "/settings",
    }
] as const;

export function UserProfileDropdown() {
    return (
        <ul className="w-full absolute top-full left-0 bg-gray-700 rounded shadow-lg">
            {Options_UserProfile.map((option) => (
                <Link
                    key={option.label}
                    href={option.href}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-600 cursor-pointer"
                >
                    {option.icon}
                    <span>{option.label}</span>
                </Link>
            ))}
           <LogoutButton />
        </ul>
    );
}
