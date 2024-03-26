import Header from '../components/Header/header'
import ContactBody from '../components/ContactBody/contactBody'
import React from 'react';
import Float from '../components/Float/float';

export default function Contact() {
  return (
    <div className="w-full h-full bg-black">
    <div className="w-full bg-no-repeat bg-coverh-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center">
      <Header />
      <ContactBody />
      <Float />
    </div>
    </div>
  )
}