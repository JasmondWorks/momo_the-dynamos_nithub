function PatientLog({image,name,id,illness}){

    return(
        <div>
            <div className="bg-[#FFE5E8]  flex items-center justify-center gap-8 border-2">
                <div>
                    {image}
                </div>
                
             <div className="flex flex-col space-y-1">
                    <span>{name}</span>
                    <span>{illness}</span>
                    <span>{id}</span>
            </div>

                
                
            </div> 
        </div>

    )
}export default PatientLog