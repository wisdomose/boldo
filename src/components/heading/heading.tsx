import { Props } from "../button/button.type";

export default function Heading(props:Props){
return (
  <h1
    className={`text-4xl md:text-5xl leading-[56px] md:leading-[72px] ${
      props.className ? props.className : ""
    }`}
  >
    {props.value}
  </h1>
);
}