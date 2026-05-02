"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';


const GoogleLogin = () => {

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="btn btn-info btn-outline mt-4 w-11/12 mx-4">Login with <FaGoogle /> Google</button>
        </div>
    );
};

export default GoogleLogin;