const BorderLayout = ({ children, className = "" }) => {
  return (
    <div className={`${className} p-6 lg:p-12 h-[100vh] bg-[#fdfcfc]`}>
      <div className="border border-neutral-400 rounded-lg h-full max-w-5xl mx-auto text-sm relative overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default BorderLayout;
