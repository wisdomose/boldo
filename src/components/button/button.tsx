import { Props } from "./button.type";

export default function Button(props: Props) {
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={`px-14 py-4 border-2 font-bold text-xl rounded-full ${
        props.className ? props.className : ""
      }`}
    >
      {props.value}
    </button>
  );
}
