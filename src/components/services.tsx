import { FiArrowRight, FiCheck } from "react-icons/fi";
import { services } from "../constants";
import { Heading } from "./heading";
import stats1 from "../assets/stats1.png";
import stats1stat from "../assets/stats1-stat.png";
import stats2 from "../assets/stats2.png";
import stats2stat from "../assets/stats2-stat.png";
import { Button } from "./button";

export default function Services() {
  return (
    <section className="py-[72px] w-full max-w-[1200px] mx-auto px-6">
      <span className="block text-center text-[#777777] text-xl leading-8 mx-auto">
        Our Services
      </span>
      <Heading
        value="Handshake infographic mass market crowdfunding iteration."
        className="text-black text-center md:w-[60%] w-max-[842px] mx-auto"
      />

      <div className="mt-20 grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(1,_300px)] md:grid-cols-[repeat(2,_300px)] xl:grid-cols-[repeat(3,_300px)] gap-[100px] justify-center">
        {services.services.map((service) => (
          <Card {...service} key={service.id} />
        ))}
      </div>

      <section className="mt-[100px] sm:mt-[185px] grid lg:grid-cols-[auto,_1fr] gap-[150px] self-end justify-center">
        {/* image */}
        <div className="relative max-w-[494px] max-h-[506px]">
          <img
            src={stats1}
            alt="stats 1"
            className="w-full h-full object-contain"
          />
          <div className="absolute -bottom-[104px] right-[57px]">
            <img
              src={stats1stat}
              alt="stats 1 stat"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* content */}
        <div className="">
          <h3 className="leading-[56px] text-[36px] font-normal max-w-[493px] mb-4">
            {services.customers[0].heading}
          </h3>
          <ul>
            {services.customers[0].services.map((service, index) => (
              <li key={index} className="flex items-center mt-6">
                <div className="min-h-[36px] min-w-[36px] h-9 w-9 rounded-full grid place-items-center bg-brand text-white mr-[27px] text-xl leading-8">
                  <FiCheck />
                </div>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
          <Button
            value="Start now"
            className="bg-brand border-brand text-white mt-14"
          />
        </div>
      </section>

      <section className="mt-[150px] sm:mt-[226px] grid lg:grid-cols-[1fr,_auto] gap-[150px] flex-col-reverse self-end justify-center">
        <div className="lg:self-end">
          <h3 className="leading-[56px] text-[36px] font-normal max-w-[493px] mb-4">
            {services.customers[1].heading}
          </h3>
          <ul>
            {services.customers[1].services.map(
              ({ icon: Icon, ...service }, index) => (
                <li
                  key={index}
                  className="flex items-center mt-6 rounded-md py-4 px-6 shadow-custom cursor-pointer transition-all bg-white group hover:bg-brand"
                >
                  <div className="h-9 w-9 rounded-full grid place-items-center mr-3 text-xl leading-8 transition-all text-brand group-hover:text-white">
                    {Icon && <Icon />}
                  </div>
                  <p className="font-semibold transition-all text-brand group-hover:text-white">
                    {service.desc}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="relative max-w-[444px] max-h-[523px]">
          <img
            src={stats2}
            alt="stats 1"
            className="w-full h-full overflow-hidden object-contain"
          />
          <div className="absolute -bottom-[32%] left-[11%]">
            <img
              src={stats2stat}
              alt="stats 1 stat"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

type Props = typeof services.services[0];
function Card(props: Props) {
  return (
    <div className="w-full">
      {/* img */}
      <div className="">
        <img src={props.img} className="w-full h-full object-contain" />
      </div>
      {/* content */}
      <div className="mt-6">
        <h4 className="text-black text-2xl leading-9">{props.heading}</h4>
        <p className="text-[#777777] text-xl leading-8 mb-7">{props.desc}</p>
        <a
          href={props.href}
          className="relative flex items-center w-fit pb-1 group"
        >
          <p className="mr-3 font-bold text-xl leading-8">Explore page</p>
          <FiArrowRight />
          <div className="absolute h-[2px] left-0 bottom-0 bg-brand w-0 transition-all group-hover:w-full"></div>
        </a>
      </div>
    </div>
  );
}
