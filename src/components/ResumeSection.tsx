import { twMerge } from "tailwind-merge";

type ResumeSectionProps = {
  years: string;
  title?: string;
  entity?: string;
  description?: string[];
  details?: string;
};

export default function ResumeSection({
  years,
  title,
  entity,
  description,
  details
}: ResumeSectionProps) {
  return (
    <div className="sm:flex justify-between items-baseline w-full xl:w-[75%] pb-8 mx-auto">
      <div className="hidden sm:block w-[46%] text-right pr-5">
        <p className="font-semibold text-gray-600">{years}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>

      <div className="absolute left-[5%] -translate-x-[50%] translate-y-[60%] sm:relative sm:left-0 sm:-translate-x-0 sm:translate-y-0 z-10 bg-secondary rounded-full size-3"></div>

      <div className="sm:w-[46%] pl-[12%] sm:pl-5">

        <p className="font-semibold text-gray-600">{entity}</p>
        <p className="font-semibold text-gray-600 sm:hidden">{years}</p>
        <p className="text-sm text-gray-500 sm:hidden">{title}</p>
        <p className="text-sm text-gray-500">
          {details && details}
          {description && <ul className="text-gray-600 mt-3 list-disc list-inside">
            {description.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>}
        </p>
      </div>
    </div>
  );
}
