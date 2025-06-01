function SuggestionBox({img,name}){

    return(
        <>
            <div className="flex shadow-2xl gap-2 rounded-md w-max h-max p-3 ">
                <img src={img} alt="A message img" />
                {name}

            </div>


        </>
    )
}
export default SuggestionBox