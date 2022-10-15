import Nav from "./nav";
import heroImg from "../assets/hero graphics.png";
import { hero } from "../constants";
import { Button } from "./button";
import { useEffect, useRef } from "react";
import { Heading } from "./heading";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let position = 0;

    const interval = setInterval(() => {
      if (ref.current === null) return;
      position += 1;
      ref.current.style.backgroundPositionX = position + "px";
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-brand pt-14 pb-[74px] relative isolate overflow-hidden">
      <div className="hidden md:block w-[1293px] h-[1293px] bg-brand-light rounded-full absolute -z-[1] left-[777px] -top-[789px]"></div>
      <div className="max-w-[1200px] mx-auto">
        <Nav />

        <section className="flex flex-col-reverse lg:flex-row mt-16 px-6">
          <div className="sm:max-w-[567px] sm:mr-[140px] mt-20 lg:mt-0">
            <Heading value={hero.heading} className="text-white " />
            <p className="text-gray-light leading-[28px] mt-4">{hero.desc}</p>

            <div className="mt-10">
              <Button
                value="Buy template"
                className="bg-teal border-teal text-brand mr-6"
              />
              <Button value="Explore" className="text-white mt-6 md:mt-0" />
            </div>
          </div>
          <div className="max-w-[493px] max-h-[423px]">
            <img src={heroImg} alt="hero" className="w-full h-full object-contain" />
          </div>
        </section>

        <div className="relative mt-[89px]">
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.109375) 31.6%, rgba(10, 38, 64, 0) 72.89%, #0A2640 97.87%)",
            }}
          ></div>
          <div
            ref={ref}
            className={`h-12 bg-hero bg-repeat-x rotate-180`}
          ></div>
        </div>
      </div>
    </section>
  );
}
