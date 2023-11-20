const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex ml-5 flex-col">
      <div className="p-4 text-center">
        <img
          className="my-5"
          src="/images/logo.png"
          alt="Logo"
          width="80"
          height="80"
        />
      </div>
      <div className="m-5">
        <h1 className="text-4xl font-bold mb-2">Welcome to Matrix Chain</h1>
        <p className="text-lg text-gray-600">
          Connect an Ethereum wallet <br /> to manage your DeFi portfolio
        </p>
      </div>

      <nav className="flex-1">
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
        >
          Connect
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
        >
          Explore
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
        >
          Swap
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
        >
          Settings
        </a>
      </nav>

      {/* Add any additional elements or functionalities here */}
    </div>
  );
};

export default Sidebar;
