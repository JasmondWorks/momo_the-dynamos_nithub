function PatientDetailsCard({ name, id, illness, avatar }) {
  return (
    <div className="flex items-center gap-5 rounded-md p-5 md:px-12 md:py-8 bg-[#ffe5e8]">
      <img
        src={avatar}
        alt={`avatar of ${name}`}
        className="rounded-full object-cover h-20"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="font-bold text-xs">{illness}</p>
        <p className="text-xs font-medium">id: {id}</p>
      </div>
    </div>
  );
}

export default PatientDetailsCard;
