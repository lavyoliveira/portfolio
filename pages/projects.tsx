import Header from '../components/Header/header'
import ProjectsBody from '../components/ProjectsBody/projectsBody'
import React from 'react';
import Float from '../components/Float/float';

export default function Projects() {
  return (
    <div className="w-full h-full bg-black">
    <div className="w-full bg-no-repeat bg-coverh-full min-h-screen bg-[url('/bg.svg')] flex flex-col items-center">
      <Header />
      <ProjectsBody />
      <Float />
    </div>
    </div>
  )
}