import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="content">
        <Navbar />
        {/* props ini merujuk pada semua hal yang di bungkus dengan Layout Component */}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
