import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            roles: string[];
        } & DefaultSession["user"];
    }

    interface User {
        roles: string[];
    }
}

declare module "next-auth/adapters" {
    interface AdapterUser {
        roles: string[];
    }
}

declare module "@auth/core/adapters" {
    interface AdapterUser {
        roles: string[];
    }
}
