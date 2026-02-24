import { NavBar } from "@/components"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar />
            <section>
                {children}
            </section>
        </main>

    );
}