"use client";
import menuItems from "@/data/menuItems";
import { isParentActive } from "@/utils/isMenuActive";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
    const path = usePathname();


    const links = [
        {
            label: "Home", path: "/",
            subMenu: [

            ],
        },

        {
            label: "Listings",

            subMenu: [
                { label: "Auctions", path: "/auctions" },
                { label: "One Price", path: "/one-price" }

            ],


        },
        {
            label: "About Us", path: "about-us",
            subMenu: [

            ],
        },
        {
            label: "Blogs", path: "blogs",
            subMenu: [

            ],
        },
        {

            label: "Service", path: "service",
            subMenu: [

            ],
        },


    ];


    return (
        <>
            {links.map((menuItem, index) => (
                <li className="dropitem" key={index}>
                    <a
                        className={
                            isParentActive(menuItem.subMenu, path)
                                ? "active d-flex"
                                : "d-flex"
                        }
                        href="#"
                    >
                        {
                            !menuItem.subMenu.length ?
                                <>

                                    <Link
                                        className={
                                            path ===
                                                menuItem.path
                                                ? "active"
                                                : ""
                                        }
                                        href={
                                            menuItem.path
                                        }
                                    >
                                        {
                                            menuItem.label
                                        }
                                    </Link>


                                </>
                                :
                                <> <span className="title">{menuItem.label}</span>
                                    <span className="arrow"></span></>
                        }




                    </a>
                    <ul className="sub-menu">
                        {menuItem?.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropitem">
                                {subItem.subMenu ? (
                                    <>
                                        <a
                                            className={
                                                isParentActive(
                                                    subItem.subMenu,
                                                    path
                                                )
                                                    ? "active"
                                                    : ""
                                            }
                                            href="#"
                                        >
                                            {subItem.label}
                                        </a>
                                        <span className="arrow"></span>
                                        <ul className="sub-menu">
                                            {subItem.subMenu.map(
                                                (
                                                    nestedSubItem,
                                                    nestedSubIndex
                                                ) => (
                                                    <li key={nestedSubIndex}>
                                                        <Link
                                                            className={
                                                                path ===
                                                                    nestedSubItem.path
                                                                    ? "active"
                                                                    : ""
                                                            }
                                                            href={
                                                                nestedSubItem.path
                                                            }
                                                        >
                                                            {
                                                                nestedSubItem.label
                                                            }
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={subItem.path}
                                        className={
                                            path === subItem.path
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {subItem.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
            {/* {links.map((link, index) => (
                <li className="list-inline-item" key={index}>
                    <Link href={link.path}>{link.label}</Link>
                </li>
            ))} */}
        </>
    );
};

export default MainMenu;
