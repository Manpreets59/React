const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {Array(25)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-72 h-56 bg-gray-200 rounded-2xl animate-pulse shadow-md"
          >
            <div className="h-32 bg-gray-300 rounded-t-2xl" />
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
