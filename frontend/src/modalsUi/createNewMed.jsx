import Button from "../component/button"
import Feeling from "../component/feeling"
import createMedImg from "../assets/createMedImg.svg"

function CreateNewMed(handleCancel){
    return(
        <div >
            <Feeling
            image={<img src={createMedImg}/>}
            handleCancel={handleCancel}
         />
          <input
          type="text"
          placeholder="Enter Illness/Condition"
          className="border w-[80%] rounded-md h-12 text-2xl p-3"
        />
          <Button name='Submit' color='#8E44AD' widthClass='w-64'/>
        </div>

    )
}export default CreateNewMed