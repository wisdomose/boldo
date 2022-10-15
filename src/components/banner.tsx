import { Button } from "./button";
import { Heading } from "./heading";

export default function Banner() {
  return (
    <section className="max-w-[1200px] w-[90vw] mx-auto bg-brand rounded-xl relative overflow-hidden isolate px-10 py-10 xl:px-[242px] xl:py-[72px]">
      <div className="w-[1293px] h-[1293px] bg-brand-light rounded-full absolute -z-[1] left-[25%] -top-[1000px] lg:left-[466px] lg:-top-[1054px]"></div>

      <Heading
        value="An enterprise template to ramp up your company website"
        className="text-center max-w-[70vw] mx-auto text-white "
      />
      <form className="block mt-12 w-full md:w-fit mx-auto">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email address"
          // max-w-[370px]
          className="py-4 px-8 rounded-full w-full md:w-[370px] md:max-w-[370px] outline-none"
        />
        <Button
          value="Start now"
          className="bg-teal border-teal text-brand block md:inline-block mx-auto md:mx-0 mt-4 md:mt-0 md:ml-6"
        />
      </form>
    </section>
  );
}
