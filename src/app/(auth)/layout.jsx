import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <ToastContainer />
            {children}
            <Footer />
        </>
    );
};

export default AuthLayout;