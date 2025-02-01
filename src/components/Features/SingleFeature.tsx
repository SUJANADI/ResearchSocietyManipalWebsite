const SingleFeature = ({ feature }) => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:bg-dark dark:shadow-gray-800/25">
        <div className="mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
          {feature.icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
          {feature.title}
        </h3>
        <p className="flex-1 text-body-color dark:text-gray-300">
          {feature.paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
