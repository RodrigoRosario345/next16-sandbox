import { getServerSession } from "next-auth";
import { UserProfileButton } from "../UserProfileButton";
import Link from "next/link";

export async function NavBar() {
    const session = await getServerSession();

    return (
        <nav className="bg-gray-800 px-4 flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">My App</h1>
            {session && session.user ? (
                <UserProfileButton
                    name={session.user.name}
                    email={session.user.email}
                    image={session.user.image}
                />
            ) : (
                <Link href="/api/auth/signin" className="text-gray-300 hover:text-white">
                    Login
                </Link>
            )}
        </nav>
    );
}
