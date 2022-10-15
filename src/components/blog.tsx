import { FiChevronDown } from "react-icons/fi";
import office from "../assets/office.png";
import { useRef, useState } from "react";
import { Heading } from "./heading";
import { Button } from "./button";
import { blogs } from "../constants";
export default function Blog() {
  return (
    <section className="pt-[124px] max-w-[1100px] mx-auto mb-[124px]  px-6">
      <section className="">
        <div className="max-w-[1100px] h-[300px] md:h-[403px] rounded-3xl overflow-hidden">
          <img
            src={office}
            alt="office"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-[100px]">
          <h2 className="text-4xl leading-[56px] max-w-[500px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>

          <div>
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </section>
      <section className="mt-[158px]">
        <span className="block text-center text-[#777777] text-xl leading-8 mx-auto">
          Our Blog
        </span>
        <Heading
          value="Value proposition accelerator product management venture"
          className="text-black text-center md:w-[60%] w-max-[842px] mx-auto mt-3"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[50px] mt-[79px]">
          {blogs.map((blog, index) => (
            <Card {...blog} key={index} />
          ))}
        </div>

        <Button
          value="Load more"
          className="border-brand block mx-auto text-brand mt-[84px] hover:bg-brand hover:text-white transition-all duration-300"
        />
      </section>
    </section>
  );
}

function Accordion() {
  const [open, setOpen] = useState(false);
  const update = () => setOpen((s) => !s);
  const ref = useRef<HTMLParagraphElement>(null);
  return (
    <div className="border-b-[1px] border-[#C4C4C4] mb-8">
      <div
        className="flex items-center justify-between cursor-pointer z-10"
        tabIndex={0}
        onClick={update}
      >
        <p className="text-xl leading-8">accordion btn</p>
        <div className="w-7 h-7 rounded-full bg-brand grid place-items-center text-white text-lg">
          <FiChevronDown
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </div>
      </div>
      <div
        style={{
          height: open ? (ref.current?.clientHeight ?? 0) + 16 + "px" : "16px",
        }}
        className={`transition-all duration-300 overflow-hidden bg-red pt-4`}
      >
        <p className="pb-4" ref={ref}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          molestiae natus quisquam veniam impedit quod. Sapiente, laudantium
          voluptatum tempore architecto inventore dicta similique, excepturi
          blanditiis officiis, maxime itaque quidem ullam!
        </p>
      </div>
    </div>
  );
}

type Props = typeof blogs[0];
function Card(props: Props) {
  return (
    <div className="bg-white p-5 rounded-xl cursor-pointer hover:shadow-custom transition-all duration-300">
      <div className="rounded-xl overflow-hidden">
        <img src={props.img} alt="image" className="w-full h-full" />
      </div>
      <div className="mt-6">
        <div>
          {/* category */}
          <span className="text-brand inline-block mr-3 font-bold">
            {props.category}
          </span>
          {/* date */}
          <span className="text-[#777777]">{props.date}</span>
        </div>
        <p className="leading-8 text-xl mt-3">{props.desc}</p>
      </div>
      {/* author */}
      <div className="flex items-center mt-5">
        <div className="mr-3">
          <img src={props.author.image} alt="avatar" />
        </div>
        <p>{props.author.name}</p>
      </div>
    </div>
  );
}
