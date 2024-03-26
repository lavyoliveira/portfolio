import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ContactBody() {
  return (
    <main className="[&>*]:animate-fade-in-1.5 relative z-10">
      <section className="text-center text-sky-100">
        <h1 className="text-3xl font-montserrat mt-40 font-semibold">
          CONTACT
        </h1>
        <h2 className="text-[50px] font-zilla font-bold leading-none mt-14">
          Let’s keep in touch.
        </h2>
        <p className="text-[16px] font-montserrat">
          lavynia.oliveira@unifei.edu.br
        </p>
          <div className="flex justify-center">
            <a href="https://github.com/lavyoliveira">
                <FontAwesomeIcon icon={faGithub} className="w-10 h-10"/>
            </a>
            <a href="https://www.linkedin.com/in/lavynia-de-oliveira-2b121322b/">
                <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10"/>
              </a>
          </div>
      </section>
    </main>
  );
}
