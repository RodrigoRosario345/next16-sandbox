import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export function LogoutButton() {
    const handleLogout = () => {
        signOut();
    };

    return (
        <button
            className="w-full flex items-center gap-3 p-2 hover:bg-gray-600 cursor-pointer"
            onClick={handleLogout}
        >
            <MdLogout />
            <span>Logout</span>
        </button>
    );
}
