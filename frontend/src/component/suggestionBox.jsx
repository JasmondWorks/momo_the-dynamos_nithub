function SuggestionBox({ img, name }) {
  return (
    <>
      <button className="flex border-1 border-neutral-200 gap-2 rounded-md w-max h-max p-3 text-xs font-medium cursor-pointer">
        <img src={img} alt="A message img" />
        {name}
      </button>
    </>
  );
}
export default SuggestionBox;
