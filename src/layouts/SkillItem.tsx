import {useRef, useEffect} from "react"


type SkillItemProps = {
  title: string;
  value: number;
};

export default function SkillItem({ title, value }: SkillItemProps) {

  return (
    <p className="flex justify-between gap-2 items-center mb-1">

      <span className="w-[15%] text-base font-light">{title}</span>
      <progress className="w-[85%] progress-custom" value={value} max={100}></progress>
    </p>
  );
}
