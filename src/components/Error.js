import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err); // use error instead of log if needed in production

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!!</h1>
        <h2 className="text-xl text-gray-700 mb-2">Something went wrong.</h2>
        <h3 className="text-gray-500">
          {err?.status || "Unknown Error"}: {err?.statusText || "No status text"}
        </h3>
        <button
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
          onClick={() => window.location.href = "/"}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
