const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-6">
          I am the <span className="text-indigo-600 font-semibold">GOAT</span> 🐐
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition">
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
