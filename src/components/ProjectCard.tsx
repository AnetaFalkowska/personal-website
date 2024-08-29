type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  languages: string;
  link: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  languages,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-[#fbf4f9] w-full gap-8 flex flex-col xl:flex-row justify-start items-center xl:items-start rounded-lg shadow-md m-4 p-8">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="max-w-[80%] xl:max-w-[500px] rounded-md object-contain mb-4"
      ></img>
      <div className="flex-shrink">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 mb-4">
          <strong>Languages: </strong>
          {languages}
        </p>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
