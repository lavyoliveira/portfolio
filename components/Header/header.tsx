import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-black text-sky-100 pt-20 px-10 font-zilla-slab font-bold text-[20px] w-full max-w-7xl">
      <nav className="flex justify-between container">
        <Link href="/">home</Link>
        <div className="flex space-x-4">
          <Link href="/about">about</Link>
          <Link href="/projects">projects</Link>
          <Link href="/contact">contact</Link>
        </div>
      </nav>
    </header>
  );
}