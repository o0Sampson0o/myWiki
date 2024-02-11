"use client";

import { twMerge } from "tailwind-merge";
import sideNavItems, { type SideNavItem } from "./sideNavItems";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function SideNav() {
    return (
        <nav className="h-full w-60">
            <div className="relative size-full overflow-hidden rounded-lg bg-white p-2 shadow-md dark:bg-[#242527]">
                <SideNavList
                    items={sideNavItems}
                    className="absolute dark:text-[#dbdbdd]"
                />
            </div>
        </nav>
    );
}

function SideNavList({
    items,
    className,
}: Readonly<{
        items: SideNavItem[];
        className?: string;
    }>) {
    return (
    <ul className={className}>
            {items.map((item) => (
                <li key={item.caption}>
                    <div className="w-full">
                        <Link
                            href={item.path ?? `#${item.caption}`}
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
                            />
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
