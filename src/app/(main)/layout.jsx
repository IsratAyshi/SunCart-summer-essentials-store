import React from 'react';
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <ToastContainer />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;