"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div>
                <h1>Not Authenticated</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Profile Information</h1>
            {session.user ? (
                <div>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    {session.user.image ? (
                        <Image
                            src={session.user.image}
                            alt="User Avatar"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    ) : (
                        <FaRegUserCircle className="text-4xl text-gray-400" />
                    )}
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default Profile;
