import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [linkActive, setLinkActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const activeLink = router.pathname;
    setLinkActive(activeLink);
  }, [router.pathname]);

  return (
    <header className="bg-black text-sky-100 pt-20 px-10 font-zilla font-bold text-[20px] w-full max-w-7xl">
      <nav className="flex justify-between container">
        <Link href="/" className={`transition duration-500 ease-in-out cursor-pointer ${
          linkActive === "/" ? "text-orange-500" : ""
        }`}>home</Link>
        <div className="flex space-x-4">
          <Link href="/about" className={`transition duration-500 ease-in-out cursor-pointer ${
              linkActive === "/about" ? "text-orange-500" : ""
            }`}>about</Link>
          <Link href="/projects" className={`transition duration-500 ease-in-out cursor-pointer ${
              linkActive === "/projects" ? "text-orange-500" : ""
            }`}>projects</Link>
          <Link href="/contact" className={`transition duration-500 ease-in-out cursor-pointer ${
              linkActive === "/contact" ? "text-orange-500" : ""
            }`}>contact</Link>
        </div>
      </nav>
    </header>
  );
}