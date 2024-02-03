import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

import SideNav from "./_components/SideNav";
import { twMerge } from "tailwind-merge";

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
    title: "Wiki",
    description: "by Sampson"
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    comfortaa.className,
                    "flex h-dvh w-dvw gap-5 overflow-hidden p-3"
                )}
            >
                <SideNav />
                <main className="size-full overflow-auto text-wrap">
                    {children}
                </main>
            </body>
        </html>
    );
}
