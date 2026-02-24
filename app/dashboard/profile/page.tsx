"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const STATUS_OPTIONS = {
    loading: "Loading...",
    authenticated: "Authenticated",
    unauthenticated: "Not authenticated",
} as const;


const ProfilePage = () => {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <div className="bg-gray-800 m-6 p-6 rounded-lg text-center">
                <h1 className="text-xl">{STATUS_OPTIONS[status]}</h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 m-6 p-6 rounded-lg text-white space-y-4">
            <h1 className="text-xl font-bold">Profile Information</h1>
            {session.user ? (
                <div className="flex items-center gap-4">

                    {session.user.image ? (
                        <Image
                            src={session.user.image}
                            alt="User Avatar"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                    ) : (
                        <FaRegUserCircle className="text-4xl text-gray-400" />
                    )}
                    <div>
                        <p className="font-semibold">{session.user.name}</p>
                        <p className="text-sm text-gray-300">{session.user.email}</p>
                    </div>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default ProfilePage;
