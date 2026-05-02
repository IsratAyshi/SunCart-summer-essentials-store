"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import userImg from '@/assets/user.png';
import { AiOutlineShopping } from 'react-icons/ai';
import { authClient } from '@/lib/auth-client';
import { CiUser } from 'react-icons/ci';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()

    const user = session?.user;
    // console.log(user);

    const handleLogout = () => {
        authClient.signOut()

    }

    // To show login succesful toast once user is logged in
    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams.get("login") === "success") {
            toast.success("Login successful");
        }
    }, [searchParams]);


    const links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/allProducts">Products</Link></li>
        <li><Link href="/myProfile">My Profile</Link></li>
    </>

    return (
        <div className="navbar shadow-sm bg-[#FFFBF5] border-b border-[#F5E6D3] px-8">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <a className="text-3xl tracking-wider font-noto-serif font-semibold">SunCart</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                <AiOutlineShopping className="text-2xl" />

                {
                    isPending ? <div><span className="loading loading-spinner loading-lg"></span></div>
                        :
                        user ? <>
                            <span className='text-sm'>{user.name}</span>
                            <div className="w-10 rounded-full">
                                <Image
                                    src={user?.image || userImg}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    alt="userImg" />
                            </div>
                            <Link href="/login">
                                <button onClick={handleLogout} className="btn px-6 bg-[#FF7F50]">Logout</button>
                            </Link>
                        </> : <>
                            <div className="w-10 rounded-full">
                                <Image
                                    src={userImg}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    alt="userImg" />
                            </div>
                            <Link href="/login"><button className="btn px-6 bg-[#FF7F50]">Login</button></Link>
                        </>
                }




            </div>
        </div>

    );
};

export default Navbar;