"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showEye, setShowEye] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data);
    }

    return (
        <div className='py-15 bg-[#FFFBF5]/50'>
            <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
                <div className='p-20 rounded-xl bg-white shadow'>
                    <h2 className='font-bold text-2xl text-center'>Register Your Account</h2>

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
                                    className="input w-full mb-3 bg-base-200"
                                    placeholder="Enter Your Name" />

                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>

                            {/* photo-url */}
                            <div>
                                <legend className="fieldset-legend ">Photo URL</legend>
                                <input
                                    {...register('photo', { required: "Photo field is required" })}
                                    type="text"
                                    className="input w-full mb-3 bg-base-200"
                                    placeholder="Enter Your Photo URL" />

                                {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                            </div>

                            {/* email */}
                            <div>
                                <legend className="fieldset-legend ">Email Address</legend>
                                <input
                                    {...register('email', { required: "Email field is required" })}
                                    type="email"
                                    className="input w-full mb-3 bg-base-200"
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
                                    className="input w-full mb-5 bg-base-200"
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




                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>

                    <div className="divider">OR</div>

                    <button className="btn btn-info btn-outline mt-4 w-11/12 mx-4">Login with <FaGoogle /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;