"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Users = () => {
    const { data: session } = useSession();

    console.log("Session data:", session);

    if (!session) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Authenticated</h1>
            {session.user ? (
                <div>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <Image
                        src={session.user.image || "/default-avatar.png"}
                        alt="User Avatar"
                        width={100}
                        height={100}
                    />
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default Users;
