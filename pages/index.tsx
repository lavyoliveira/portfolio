import Header from '../components/Header/header'
import IndexBody from '../components/IndexBody/indexBody'
import React from 'react';
import Float from '../components/Float/float';

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
    <div className="w-full bg-no-repeat bg-cover h-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center">
      <Header />
      <IndexBody />
      <Float />
    </div>
    </div>
  )
}