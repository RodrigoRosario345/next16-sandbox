import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export function LogoutButton() {

    const handleLogout = () => {
        // Implement your logout logic here, such as clearing user data and redirecting to the login page
        console.log("User logged out");
        signOut();
    }



    return (
        <button className="w-full flex items-center gap-3 p-2 rounded hover:bg-gray-600 cursor-pointer" onClick={handleLogout}>
            <MdLogout />
            <span>Logout</span>
        </button>
    );
}
