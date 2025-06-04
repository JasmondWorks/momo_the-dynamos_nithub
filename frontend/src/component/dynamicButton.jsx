const DynamicButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-white text-black rounded-full hover:bg-[#FFE5E8] border-[#FFE5E8] border-2"
    >
      {label}
    </button>
  );
};

export default DynamicButton;
