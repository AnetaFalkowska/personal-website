type KeyFeature = {
  name: string;
  description: string;
};

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  link: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  techStack,
  keyFeatures,
  link,
}: ProjectCardProps) {
  return (
    <>
      <div className="relative bg-white border-t-4 border-secondary p-6 pt-16 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="object-contain object-top w-full lg:w-1/2 rounded-md mb-4 lg:mb-0 lg:mr-8"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <h4 className="text-lg font-semibold text-gray-700">Tech Stack</h4>
          <ul className="flex flex-wrap gap-2 mb-8">
            {techStack.map((el, index) => (
              <li
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
              >
                {el}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Key Features
          </h4>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            {keyFeatures.map((el, index) => (
              <li className="mb-2" key={index}>
                <strong>{el.name}: </strong>
                {el.description}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/your-repo"
            className="text-secondary font-bold mb-4 block"
          >
            View on GitHub →
          </a>
          <a href={link} className="text-secondary font-bold mb-4 block">
            Visit Project →
          </a>
        </div>
        <div className="absolute top-0 right-0 w-12 h-12 bg-secondary rounded-bl-lg"></div>
      </div>
    </>
  );
}
