import Header from '../components/Header/header'
import AboutBody from '../components/AboutBody/aboutBody'
import React from 'react';
import Float from '../components/Float/float';

export default function About() {
  return (
    <div className="w-full h-full bg-black">
    <div className="w-full bg-no-repeat bg-cover h-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center">
      <Header />
      <Float />
      <AboutBody />
    </div>
    </div>
  )
}