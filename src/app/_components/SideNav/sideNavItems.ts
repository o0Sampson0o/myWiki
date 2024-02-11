import { IconType } from "react-icons";
import { FaNetworkWired } from "react-icons/fa6";
import { IoLayersSharp } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";

export type SideNavItem = {
    caption: string;
    path: string | null;
    icon: IconType;
    children?: SideNavItem[];
};

const sideNavItems: SideNavItem[] = [
		{
				caption: "Map",
				path: "#",
				icon: FaNetworkWired
		}
];

export default sideNavItems;
