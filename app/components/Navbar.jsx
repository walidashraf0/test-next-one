"use client"; // This is a client component
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  //   console.log(pathName);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header className="flex justify-center items-center bg-red-600 capitalize h-14">
        <nav className="flex gap-4 items-center">
          {links.map((link, key) => (
            <Link
              className={`${
                pathName === link.path && "bg-white text-red-600 px-4 py-2 rounded-lg"
              }`}
              key={key}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
