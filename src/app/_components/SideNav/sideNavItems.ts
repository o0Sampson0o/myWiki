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
        caption: "Computer Networking",
        path: null,
        icon: FaNetworkWired,
        children: [
            {
                caption: "Introduction",
                path: "/networking/introduction",
                icon: FaNetworkWired
            },
            {
                caption: "Network Devices",
                path: "/networking/network-devices",
                icon: FaNetworkWired
            },
            {
                caption: "OSI Model",
                path: "/networking/osi-model",
                icon: IoLayersSharp,
                children: [
                    {
                        caption: "Physical Layer",
                        path: "/networking/osi-model/physical-layer",
                        icon: IoLayersSharp
                    },
                    {
                        caption: "Data Link Layer",
                        path: "/networking/osi-model/data-link-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "Ethernet",
                                path: "/networking/osi-model/data-link-layer/ethernet",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "MAC Address",
                                path: "/networking/osi-model/data-link-layer/mac-address",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "Switching",
                                path: "/networking/osi-model/data-link-layer/switching",
                                icon: IoLayersSharp
                            }
                        ]
                    },
                    {
                        caption: "Network Layer",
                        path: "/networking/osi-model/network-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "IP Address",
                                path: "/networking/osi-model/network-layer/ip-address",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "Subnetting",
                                path: "/networking/osi-model/network-layer/subnetting",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "Routing",
                                path: "/networking/osi-model/network-layer/routing",
                                icon: IoLayersSharp
                            }
                        ]
                    },
                    {
                        caption: "Transport Layer",
                        path: "/networking/osi-model/transport-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "TCP",
                                path: "/networking/osi-model/transport-layer/tcp",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "UDP",
                                path: "/networking/osi-model/transport-layer/udp",
                                icon: IoLayersSharp
                            }
                        ]
                    },
                    {
                        caption: "Session Layer",
                        path: "/networking/osi-model/session-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "Port",
                                path: "/networking/osi-model/session-layer/port",
                                icon: IoLayersSharp
                            }
                        ]
                    },
                    {
                        caption: "Presentation Layer",
                        path: "/networking/osi-model/presentation-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "Encryption",
                                path: "/networking/osi-model/presentation-layer/encryption",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "Decryption",
                                path: "/networking/osi-model/presentation-layer/decryption",
                                icon: IoLayersSharp
                            }
                        ]
                    },
                    {
                        caption: "Application Layer",
                        path: "/networking/osi-model/application-layer",
                        icon: IoLayersSharp,
                        children: [
                            {
                                caption: "HTTP",
                                path: "/networking/osi-model/application-layer/http",
                                icon: IoLayersSharp,
                                children: [
                                    {
                                        caption: "HTTP Request",
                                        path: "/networking/osi-model/application-layer/http/http-request",
                                        icon: IoLayersSharp,
                                        children: [
                                            {
                                                caption: "HTTP Methods",
                                                path: "/networking/osi-model/application-layer/http/http-request/http-methods",
                                                icon: IoLayersSharp
                                            }
                                        ]
                                    },
                                    {
                                        caption: "HTTP Response",
                                        path: "/networking/osi-model/application-layer/http/http-response",
                                        icon: IoLayersSharp,
                                        children: [
                                            {
                                                caption: "HTTP Status Codes",
                                                path: "/networking/osi-model/application-layer/http/http-response/http-status-codes",
                                                icon: IoLayersSharp,
                                                children: [
                                                    {
                                                        caption:
                                                            "1xx Informational",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-status-codes/1xx-informational",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption: "2xx Success",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-status-codes/2xx-success",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption:
                                                            "3xx Redirection",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-status-codes/3xx-redirection",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption:
                                                            "4xx Client Error",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-status-codes/4xx-client-error",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption:
                                                            "5xx Server Error",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-status-codes/5xx-server-error",
                                                        icon: IoLayersSharp
                                                    }
                                                ]
                                            },
                                            {
                                                caption: "HTTP Headers",
                                                path: "/networking/osi-model/application-layer/http/http-response/http-headers",
                                                icon: IoLayersSharp,
                                                children: [
                                                    {
                                                        caption:
                                                            "General Headers",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-headers/general-headers",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption:
                                                            "Request Headers",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-headers/request-headers",
                                                        icon: IoLayersSharp
                                                    },
                                                    {
                                                        caption:
                                                            "Response Headers",
                                                        path: "/networking/osi-model/application-layer/http/http-response/http-headers/response-headers",
                                                        icon: IoLayersSharp
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        caption: "HTTP Cookies",
                                        path: "/networking/osi-model/application-layer/http/http-cookies",
                                        icon: IoLayersSharp
                                    }
                                ]
                            },
                            {
                                caption: "HTTPS",
                                path: "/networking/osi-model/application-layer/https",
                                icon: IoLayersSharp,
                                children: [
                                    {
                                        caption: "TLS",
                                        path: "/networking/osi-model/application-layer/https/tls",
                                        icon: IoLayersSharp
                                    }
                                ]
                            },
                            {
                                caption: "FTP",
                                path: "/networking/osi-model/application-layer/ftp",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "SMTP",
                                path: "/networking/osi-model/application-layer/smtp",
                                icon: IoLayersSharp
                            },
                            {
                                caption: "DNS",
                                path: "/networking/osi-model/application-layer/dns",
                                icon: IoLayersSharp
                            }
                        ]
                    }
                ]
            },
            {
                caption: "TCP/IP Model",
                path: "/networking/tcp-ip-model",
                icon: IoLayersOutline,
                children: [
                    {
                        caption: "Link Layer",
                        path: "/networking/tcp-ip-model/link-layer",
                        icon: IoLayersOutline
                    },
                    {
                        caption: "Internet Layer",
                        path: "/networking/tcp-ip-model/internet-layer",
                        icon: IoLayersOutline
                    },
                    {
                        caption: "Transport Layer",
                        path: "/networking/tcp-ip-model/transport-layer",
                        icon: IoLayersOutline
                    },
                    {
                        caption: "Application Layer",
                        path: "/networking/tcp-ip-model/application-layer",
                        icon: IoLayersOutline
                    }
                ]
            }
        ]
    }
];

export default sideNavItems;
