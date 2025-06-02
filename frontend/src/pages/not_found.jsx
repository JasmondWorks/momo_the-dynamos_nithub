import MomoLogo from "/src/assets/momoLogo.svg";

function NotFound() {
  return (
    <div className="h-screen text-center grid grid-rows-[auto_1fr]">
      {/* Navbar */}
      <div className="flex gap-3 items-center shadow px-4 py-2 max-w-5xl">
        <img src={MomoLogo} alt="logo" className="h-10" />
        <h1 className="font-bold">Momo</h1>
      </div>
      <div className="space-y-5 h-full flex flex-col justify-center">
        <p>This page could not be found</p>
        <div>
          <a
            href="/"
            className="p-4 py-2 inline-block bg-[#8e44ad] font-bold text-white"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
