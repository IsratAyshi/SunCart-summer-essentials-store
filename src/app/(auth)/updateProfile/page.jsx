"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateProfile = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleProfileUpdate = async (data) => {
        console.log(data);

        const { name, photo } = data;
        // console.log(name, photo);

        const { data: res, error } = await authClient.updateUser({
            name: name,
            image: photo,
        });

        if (error) {
            toast.error(error.message);
            return;
        }
        if (res) {
            toast.success("Profile updated successfully");
            router.push('/myProfile');
        }
    }

    return (
        <div className='py-15 bg-[#FFFBF5]/50'>
            <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
                <div className='p-20 rounded-xl bg-white shadow'>
                    <h2 className='font-bold text-2xl text-center font-noto-serif'>Update Your Profile</h2>

                    <div className='divider mt-5 mb-1'></div>

                    {/* <form onSubmit={handleLoginFunc}> */}
                    <form onSubmit={handleSubmit(handleProfileUpdate)}>
                        <fieldset className="fieldset rounded-box w-sm p-4">
                            {/* name */}
                            <div>
                                <legend className="fieldset-legend ">Name</legend>
                                <input
                                    {...register('name', { required: "Name field is required" })}
                                    type="text"
                                    className="input w-full mb-3 bg-[#F5E6D3]"
                                    placeholder="Enter Your Name" />

                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>

                            {/* photo-url */}
                            <div>
                                <legend className="fieldset-legend ">Photo URL</legend>
                                <input
                                    {...register('photo', { required: "Photo field is required" })}
                                    type="text"
                                    className="input w-full mb-3 bg-[#F5E6D3]"
                                    placeholder="Enter Your Photo URL" />

                                {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                            </div>

                            <button className="btn bg-[#FF7F50] mt-4 text-white font-bold">Update Information</button>

                        </fieldset>
                    </form>

                    <Link href="/myProfile"><button className="btn mt-2 font-bold w-11/12   mx-4">Cancel</button></Link>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;