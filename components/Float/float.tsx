import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Float() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".shape",
        { display: "none", scale: 0 },
        {
          display: "block",
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const container = ref.current;

    if (!container) {
      return;
    }

    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll(".shape")
      );

      shapes.forEach((shape, i) => {
        const depth = 60;
        const moveX = (e.pageX - window.innerWidth / 2) / depth;
        const moveY = (e.pageY - window.innerHeight / 2) / depth;
        i++;

        let lag = shape.dataset.lag ?? `${i}`;

        gsap.to(shape, {
          x: moveX * parseInt(lag, 10),
          y: moveY * parseInt(lag, 10),
        });
      });
    }, ref);

    return () => ctx.revert();
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 float-container">
      <div ref={ref} className="absolute pointer-events-none flex space-x-9 justify-center items-center w-full h-full">
        <div className="shape">
          <Image src="blob1.svg" alt="shape" width={400} height={400}/>
        </div>

        <div className="shape">
          <Image src="blob2.svg" alt="shape" width={400} height={400}/>
        </div>

        <div className="shape">
          <Image src="blob3.svg" alt="shape" width={400} height={400}/>
        </div>
      </div>
    </div>
  );
}
