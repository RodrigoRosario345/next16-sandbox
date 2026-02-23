import { NavBar } from "@/components"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar />
            <section>
                <h1>Dashboard</h1>
                {children}
            </section>
        </main>

    );
}