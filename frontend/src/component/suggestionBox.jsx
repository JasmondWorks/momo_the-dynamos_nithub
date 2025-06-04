function SuggestionBox({ img, name }) {
  return (
    <>
<<<<<<< Updated upstream
      <button className="flex border-1 border-neutral-200 gap-2 rounded-md w-max h-max p-3 text-xs font-medium cursor-pointer">
        <img src={img} alt="A message img" />
        {name}
      </button>
=======
      <div className="flex text-sm border-1 border-neutral-100 gap-2 rounded-md w-max h-max p-2 font-medium">
        <img src={img} alt="A message img" />
        {name}
      </div>
>>>>>>> Stashed changes
    </>
  );
}
export default SuggestionBox;
