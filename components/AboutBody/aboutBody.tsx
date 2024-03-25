import React from 'react';

export default function AboutBody() {
    return (
        <main className='[&>*]:animate-fade-in-1.5'>
            <section className="text-center text-sky-100">
                <h1 className="text-3xl font-montserrat mt-40 font-semibold">ABOUT</h1>
                <h2 className="text-[50px] font-zilla font-bold leading-none my-14 max-w-7xl">A frontend developer who loves learning new technologies. GM in my spare time, RPGs and games are my everything.</h2>
                <div className="grid grid-cols-2">
                <div>
                <p className="text-[16px] font-montserrat max-w-xl mt-10 text-left">I have almost 4 years of development experience, studying Information Systems in the Federal University of Itajubá, on the south of Minas Gerais, Brasil.</p>
                </div>
                <div>
                <p className="text-[16px] font-montserrat max-w-xl mt-10 text-left">Currently, I’m working on projects on my own and finishing my bachelor degree. I have a lot of experiences, such as HTML, CSS, JavaScript, TypeScript, Dart, Flutter, Angular, Express, NodeJs, MySQL, Firebase, PHP, git, Figma, Serverless and more.</p>
                </div>
                <div>
                <p className="text-[16px] font-montserrat max-w-xl mt-10 text-left">I have two internships, those taught me about Flutter/Dart, wich is one of my passions. I’ve learned also JavaScript, TypeScript, PHP, and other technologies.</p>
                </div>
                </div>
            </section>
        </main>
    )
}