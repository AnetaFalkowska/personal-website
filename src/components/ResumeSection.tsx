import { twMerge } from "tailwind-merge";

type ResumeSectionProps = {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function ResumeSection({
  id,
  title,
  description,
  children,
  className,
  innerClassName,
}: ResumeSectionProps) {
  return (
    <section id={id} className={twMerge("pb-10 scroll-mt-24", className)}>
      <div className={twMerge("w-[60%] mx-auto", innerClassName)}>
        <header className="flex flex-col text-secondary-text my-9">
          <p className="text-2xl font-thin italic">{title}</p>
          <p className="uppercase text-sm font-thin tracking-widest">
            {description}
          </p>
        </header>
        <main className="text-gray-800">{children}</main>
      </div>
    </section>
  );
}
