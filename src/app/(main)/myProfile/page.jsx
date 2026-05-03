"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { use, useRef, useState } from 'react';
import userImg from '@/assets/user.png';
import Link from 'next/link';


const MyProfilePage = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    return (

        <div className='py-15 bg-[#FFFBF5]/50'>
            <div className='min-h-[80vh] flex justify-center items-center px-8'>

                <div className='bg-white p-20 flex flex-col  justify-center items-center shadow rounded-2xl'>

                    <div>
                        <h2 className='text-3xl mb-3 font-noto-serif'>Welcome to Your Profile</h2>
                        <p className='text-gray-500 text-sm text-center mb-3'>Manage your personal information at SunCart</p>
                    </div>


                    <div className="rounded-full">
                        <Image
                            src={user?.image || userImg}
                            width={200}
                            height={200}
                            className="rounded-full max-w-45 max-h-45"
                            alt="userImg" />
                    </div>

                    <h2 className='text-3xl font-bold mb-3'>{user?.name}</h2>
                    <p className='text-gray-500 font-medium mb-3'>Email: {user?.email}</p>

                    <Link href="/updateProfile"><button className='btn px-10 py-3 rounded bg-[#FF7F50] text-white'>Update Profile</button></Link>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;