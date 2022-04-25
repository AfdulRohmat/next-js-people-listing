import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/peoples-logo.png" width={100} height={80} />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/peoples">
        <a>People Listing</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
