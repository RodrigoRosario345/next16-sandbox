import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Options_UserProfile = [
    {
        label: "Profile",
        icon: <FaUser />,
    },
    {
        label: "Settings",
        icon: <IoSettings />,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
] as const;

export function UserProfileDropdown() {
    return (
        <ul className="w-full absolute top-full left-0 bg-gray-700 rounded shadow-lg">
            {Options_UserProfile.map((option) => (
                <li
                    key={option.label}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-600 cursor-pointer"
                >
                    {option.icon}
                    <span>{option.label}</span>
                </li>
            ))}
        </ul>
    );
}
