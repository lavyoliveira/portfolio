import Header from '../components/Header/header'
import AboutBody from '../components/AboutBody/aboutBody'
import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-no-repeat bg-coverh-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:-z-10">
      <Header />
      <AboutBody />
    </div>
  )
}