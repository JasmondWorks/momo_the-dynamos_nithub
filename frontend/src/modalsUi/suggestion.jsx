import foodImg from "../assets/foodImg.svg"
import Feeling from "../component/feeling"
// a modal suggesting to the user to have a meal
function Suggestion(){
    return(

         <Feeling 
         image ={<img src ={foodImg} alt="foodImg"/>}
         label= "Eat Something to Continue"
         />


    )
   

}
export default Suggestion