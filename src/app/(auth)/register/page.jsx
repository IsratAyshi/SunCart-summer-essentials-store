"use client";
import GoogleLogin from '@/components/shared/GoogleLogin';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const RegisterPage = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showEye, setShowEye] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data);

        const { name, email, password, photo } = data;
        // console.log(name, email, password, photo);

        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            image: data.photo,
            email: data.email,
            password: data.password,
            // rememberMe: false,
            // callbackURL: "/"
        });

        if (error) {
            toast.error(error.message);
            return;
        }
        if (res) {
            toast.success("Registration successful");
            router.push('/login');

        }
    }

    return (
        <div className='py-15 bg-[#FFFBF5]/50'>
            <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
                <div className='p-20 rounded-xl bg-white shadow'>
                    <h2 className='font-bold text-2xl text-center font-noto-serif'>Register Your Account</h2>

                    <div className='divider mt-5 mb-1'></div>

                    {/* <form onSubmit={handleLoginFunc}> */}
                    <form onSubmit={handleSubmit(handleRegisterFunc)}>
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

                            {/* email */}
                            <div>
                                <legend className="fieldset-legend ">Email Address</legend>
                                <input
                                    {...register('email', { required: "Email field is required" })}
                                    type="email"
                                    className="input w-full mb-3 bg-[#F5E6D3]"
                                    placeholder="Email" />

                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* password */}
                            <div className='relative'>
                                <legend className="fieldset-legend">Password</legend>
                                <input
                                    {...register('password',
                                        { required: "Password field is required" })}
                                    // name='password'
                                    type={showEye ? "text" : "password"}
                                    className="input w-full mb-5 bg-[#F5E6D3]"
                                    placeholder="Password" />
                                <span className='absolute top-10 right-3'>
                                    {
                                        showEye ?
                                            <FaEye onClick={() => setShowEye(!showEye)} className='text-xl cursor-pointer' />
                                            :
                                            <FaEyeSlash onClick={() => setShowEye(!showEye)} className='text-xl cursor-pointer' />
                                    }
                                </span>

                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>




                            <button className="btn bg-[#FF7F50] mt-4 text-white font-bold">Register</button>
                        </fieldset>
                    </form>

                    <div className="divider">OR</div>

                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;