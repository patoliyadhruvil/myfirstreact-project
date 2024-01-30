import { useRef, useState } from "react";

const Uncontrolled = () =>{

    const Myref = useRef();
    const [name , setName] = useState("");

    const HandleClick = () =>{

        console.log("Myref.current.value" , Myref.current.value);
        setName( Myref.current.value);
        
    }

    return(
        <div>
        <form>
            <input type="text" name="name" ref={Myref}/>
            <button type="button" onClick={HandleClick} >
                Submit
            </button>
        </form>

        <h1>
            {name}
        </h1>
        </div>
        

    )

}
export default Uncontrolled;