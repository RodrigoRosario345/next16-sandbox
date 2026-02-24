import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LogoutButton } from "./LogoutButton";

const Options_UserProfile = [
    {
        label: "Profile",
        icon: <FaUser />,
        href: "/dashboard/profile",

    },
    {
        label: "Settings",
        icon: <IoSettings />,
        href: "/dashboard/settings",
    }
] as const;


const OPTIONS_ANIMATIONS: Record<string, string> = {
    "true": "animate-dropdown-forw",
    "false": "animate-dropdown-backw",
} as const;


interface UserProfileDropdownProps {
    isOpen: boolean | null;
}

export function UserProfileDropdown({ isOpen }: UserProfileDropdownProps) {
    return (
        <ul className={`w-full absolute top-full left-0 bg-gray-700 ${OPTIONS_ANIMATIONS[String(isOpen)] ?? "translate-y-[-100%-48px]"} z-10`}>
            {Options_UserProfile.map((option) => (
                <Link
                    key={option.label}
                    href={option.href}
                    className="flex items-center gap-3 p-2 hover:bg-gray-600 cursor-pointer"
                >
                    {option.icon}
                    <span>{option.label}</span>
                </Link>
            ))}
            <LogoutButton />
        </ul>
    );
}
