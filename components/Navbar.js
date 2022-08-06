import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../public/images/Logo.png';
import { faRightFromBracket, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Router from "next/router";

const Navbar = ({ user, isLoggedIn }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    return (
        <div className="Navbar-container w-full h-14 bg-navbarBg relative">
            <nav className="flex justify-between p-2">
                <div className="nav-logo-container ml-2">
                    <Image src={Logo} alt={'app-logo'} height={40} width={40} />
                </div>
                <div className="nav-links-container flex">
                    <ul className="nav-links">
                        {
                            isLoggedIn !== 'authenticated' ? (
                                <li className="nav-link-item">
                                    <Link href='/login'>
                                        <a>
                                            Log In
                                        </a>
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <div className="flex justify-center content-center">
                                        <div className="user-log cursor-pointer" onClick={() => setDropdownVisible(!dropdownVisible)}>
                                            <Image src={user.image} alt="user-Image" height={40} width={40} className="rounded-full" />
                                        </div>
                                        {
                                            dropdownVisible && (
                                                <DropDownContainer user={user} />
                                            )
                                        }
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const DropDownContainer = ({ user }) => {
    return (
        <div className="w-1/4 p-4 bg-cardBackground absolute right-3 top-16 rounded-xl">
            <ul>
                <li>
                    <DropDownItem onClick={() => Router.push('/profile')} >
                        <div className="flex justify-between items-center">
                            <div className="user-log cursor-pointer flex" onClick={() => setDropdownVisible(!dropdownVisible)}>
                                <Image src={user.image} alt="user-Image" height={40} width={40} className="rounded-full" />
                                <div className="text-white ml-2">
                                    <h1 className="m-1 font-bold text-xl">{user.name}</h1>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} size={'sm'} color="#E4E6EB" className="w-11 h-7 flex justify-end items-center" />
                        </div>
                    </DropDownItem>
                </li>
                <li onClick={() => signOut()}>
                    <DropDownItem>
                        <div className="w-10 h-10 rounded-full p-2"  >
                            <FontAwesomeIcon icon={faRightFromBracket} size={'xl'} color="#E4E6EB" />
                        </div>
                        <div className="text-white">
                            <h1 className="m-1 text-lg font-semibold">Log Out</h1>
                        </div>
                    </DropDownItem>
                </li>
            </ul>
        </div>
    )
}

const DropDownItem = (props) => {
    return (
        <div className="p-2 w-full flex bg-navItemBackground brightness-75 content-baseline cursor-pointer rounded-xl hover:brightness-100 duration-300 mb-4">
            {props.children}
        </div>
    )
}



export default Navbar;