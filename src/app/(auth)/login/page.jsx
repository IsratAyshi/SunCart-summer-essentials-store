"use client";
import GoogleLogin from '@/components/shared/GoogleLogin';
import { authClient } from '@/lib/auth-client';
// import { email } from 'better-auth';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LoginPage = () => {

    // use of react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const handleLoginFunc = async (data) => {
        // console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/?login=success",
            // redirect: false,

        });

        if (error) {
            toast.error(error.message);
        }
        // if (res) {
        //     toast.success("Login successful");

        // }
        // console.log(errors, "Errors");


    }

    // ---- state management for password eye toggle ----
    const [showEye, setShowEye] = useState(false);

    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams.get("error")) {
            // console.log(searchParams.get("error"));
            toast.error("You need to login first to access this page.");
        }
    }, [searchParams]);


    return (
        <div className='py-15 bg-[#FFFBF5]/50'>
            <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
                <div className='p-20 rounded-xl bg-white shadow'>
                    <h2 className='font-bold text-2xl text-center font-noto-serif'>Login Your Account</h2>

                    <div className='divider mt-5 mb-1'></div>

                    {/* <form onSubmit={handleLoginFunc}> */}
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset rounded-box w-sm p-4">

                            <div>
                                <legend className="fieldset-legend ">Email Address</legend>
                                {/* <label className="label">Email Address</label> */}
                                <input
                                    {...register('email', { required: "Email field is required" })}
                                    // name='email'
                                    type="email"
                                    className="input w-full mb-3 bg-[#F5E6D3]"
                                    placeholder="Email" />

                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* password */}
                            <div className='relative'>
                                <legend className="fieldset-legend">Password</legend>
                                {/* <label className="label">Password</label> */}
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
                                {/*  errors will return when field validation fails */}
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>


                            <button className="btn bg-[#FF7F50] mt-4 text-white font-bold">Login</button>
                        </fieldset>
                    </form>

                    <p className='text-center text-sm'>Don't have an account? <Link href="/register"><span className='text-[#FF7F50] font-bold'> Register</span></Link></p>

                    <div className="divider">OR</div>

                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;