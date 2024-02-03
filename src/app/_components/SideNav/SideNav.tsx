"use client";

import { twMerge } from "tailwind-merge";
import sideNavItems, { type SideNavItem } from "./sideNavItems";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function SideNav() {
    const state = useState<{ x: number; y: number }>({ x: 0, y: 20 });
    return (
        <nav className="h-full w-60">
            <div className="relative size-full overflow-hidden rounded-lg bg-white p-2 shadow-md dark:bg-[#242527]">
                <div
                    className="absolute h-10 w-[calc(100%-16px)] rounded-lg bg-[#685cfe] transition-all duration-100 ease-in-out dark:bg-[#3a3b3d]"
                    style={{ top: state[0].y - 13 }}
                ></div>
                <SideNavList
                    items={sideNavItems}
                    state={state}
                    className="absolute dark:text-[#dbdbdd]"
                />
            </div>
        </nav>
    );
}

function SideNavList({
    items,
    className,
    state
}: Readonly<{
    items: SideNavItem[];
    className?: string;
    state: [
        { x: number; y: number },
        Dispatch<SetStateAction<{ x: number; y: number }>>
    ];
}>) {
    const [selected, setSelected] = state;
    return (
        <ul className={className}>
            {items.map((item) => (
                <li key={item.caption}>
                    <div className="w-full">
                        <Link
                            href={item.path ?? `#${item.caption}`}
                            onClick={(e) => {
                                setSelected((prev) =>
                                    item.path
                                        ? e.currentTarget?.getBoundingClientRect()
                                        : prev
                                );
                            }}
                            className={"flex gap-5 rounded-lg px-5 py-2"}
                            title={item.caption}
                        >
                            {item.icon && (
                                <item.icon className="mt-[3px] shrink-0 grow-0" />
                            )}
                            <span className="shrink-0 grow-0 overflow-hidden text-clip whitespace-nowrap">
                                {item.caption}
                            </span>
                        </Link>
                        {item.children && (
                            <SideNavList
                                className="pl-2"
                                items={item.children}
                                state={state}
                            />
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
