type ResumeItemProps = {
  timePeriod: string;
  description: string;
};

export default function ResumeItem({
  timePeriod,
  description,
}: ResumeItemProps) {
  return (
    <div className="flex flex-col gap-3 text-base my-4">
      <p className="font-semibold">{timePeriod}</p>
      <p className="font-light">{description}</p>
    </div>
  );
}
