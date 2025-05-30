function NotFound() {
  return (
    <div className="h-screen flex items-center text-center justify-center">
      <div className="space-y-5">
        <p>This page could not be found</p>
        <div>
          <a href="/" className="p-4 py-2 bg-[#8e44ad] font-bold text-white">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
