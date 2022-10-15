import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonies } from "../constants";
import { Heading } from "./heading";

export default function Testimonials() {
  const buttonStyle =
    "w-[72px] h-[72px] grid place-items-center bg-white text-brand rounded-full hover:backdrop-blur-lg hover:bg-opacity-30 hover:text-white hover:bg-teal";
  return (
    <section className="py-24 bg-brand mt-[287px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* heading */}
        <div className="flex flex-col sm:flex-row justify-between">
          <Heading
            value="An enterprise template to ramp up your company website"
            className="max-w-[716px] text-white "
          />
          <div className="self-end flex mt-8 sm:mt-0">
            <button className={buttonStyle}>
              <FiArrowLeft className="text-[32px]" />
            </button>
            <button className={buttonStyle + " ml-7"}>
              <FiArrowRight className="text-[32px]" />
            </button>
          </div>
        </div>
        {/* content */}
        <div className="flex justify-evenly flex-wrap mt-12">
          {testimonies.map((testimony, index) => (
            <Card
              {...testimony}
              key={testimony.name}
              className={index === 0 ? "ml-0" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Props = typeof testimonies[0] & { className?: string };
function Card(props: Props) {
  return (
    <div
      className={
        "p-10 bg-white rounded-xl w-fit h-fit mt-6 sm:ml-[22px] " +
        (props.className ? props.className : "")
      }
    >
      <p className="max-w-[270px] text-2xl leading-9">{props.testimony}</p>
      <div className="grid grid-cols-[auto,_1fr] items-center gap-4 mt-10">
        <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
          <img
            src={props.img}
            alt="avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="mb-[6px] font-bold">{props.name}</p>
          <p className="text-brand text-sm">{props.position}</p>
        </div>
      </div>
    </div>
  );
}
