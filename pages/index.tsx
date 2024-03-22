import Header from '../components/Header/header'
import IndexBody from '../components/IndexBody/indexBody'
import React from 'react';

export default function Home() {
  return (
    <div className="w-full bg-no-repeat bg-coverh-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:-z-10">
      <Header />
      <IndexBody />
    </div>
  )
}