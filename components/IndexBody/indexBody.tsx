import React from 'react';

export default function IndexBody() {
    return (
        <main className="[&>*]:animate-fade-in-1.5 relative z-10">
            <section className="text-center text-sky-100">
                <h1 className="text-3xl font-montserrat mt-28"><span className="font-extrabold">HI! </span>MY NAME IS</h1>
                <h2 className="text-[140px] font-zilla font-bold leading-none">Lavynia</h2>
                <h2 className="text-[140px] font-zilla font-bold leading-none">Oliveira</h2>
                <p className="text-[20px] font-zilla max-w-xl mt-14">Always learning new technologies, fascinated by solving bugs, developing new softwares and creating wonderful experiences. I am a Front End Developer who's very enthusiast with Full Stack, with huge love for Flutter/Dart, NextJs, but also loves JavaScript.</p>
            </section>
        </main>
    )
}