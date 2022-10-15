import { footer } from "../constants";
import logo from "../assets/logo-mono.png";

export default function Footer() {
  const headingStyle = "text-xl leading-8 font-bold text-black mb-8";
  const listItemStyle =
    "text-[#777777] cursor-pointer hover:text-black transition-all duration-300";
  return (
    <section className="mt-[84px] max-w-[1200px] mx-auto pb-[117px] px-6 flex flex-col md:flex-row">
      {/* info */}
      <div className="xl:mr-[179px]">
        <img src={logo} alt="logo" />
        <p className="max-w-[300px] w-full text-[#777777] mt-10 mb-16">{footer.desc}</p>
        <p className="text-[#777777]">All rights reserved.</p>
      </div>
      {/* links */}
      <div className="flex flex-col xs:flex-row flex-wrap justify-between md:justify-evenly w-full mt-8 md:mt-0">
        {/* landing */}
        <div className="mt-8 xs:mt-0 mr-14 lg:mr-24">
          <h6 className={headingStyle}>Landing</h6>
          <ul className="grid gap-8">
            {footer.landing.map((item) => (
              <li key={item} className={listItemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* community */}
        <div className="mt-8 xs:mt-0 mr-14 lg:mr-24">
          <h6 className={headingStyle}>Company</h6>
          <ul className="grid gap-8">
            {footer.company.map((item) => (
              <li key={item} className={listItemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* resiurces */}
        <div className="mt-8 xs:mt-0">
          <h6 className={headingStyle}>Resources</h6>
          <ul className="grid gap-8">
            {footer.resources.map((item) => (
              <li key={item} className={listItemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
