type SkillItemProps = {
  title: string;

};

export default function SkillItem({ title }: SkillItemProps) {

  return (
    <p className="flex justify-between gap-2 items-center mb-1">

      <span className="w-[15%] text-base font-light">{title}</span>
      {/* <progress className="w-[85%] progress-custom text-seco" value={value} max={100}></progress> */}
    </p>
  );
}
