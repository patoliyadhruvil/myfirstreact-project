import { useEffect, useState } from "react";

const State = () =>{

    // const [user , setuser] = useState("");  
    
    // const [count , setcount] = useState(0)

    // const changeName = () =>{

    //     setuser("Raj");
    //     setcount(count+1)

    // }

    // setTimeout(changeName , 1000);

    // useEffect(()=>{

    //     console.log("Helloo I,m Effect Hook");

    // } , []);

    // useEffect(()=>{

    //     console.log("Helloo I,m Effect Hook for user");

    // } , [user]);

    // useEffect(()=>{

    //     console.log("Helloo I,m Effect Hook for count");

    // } , [count])

    // return(

    //     <div>
    //         <h1>
    //             Good Morning , {user}
    //         </h1>
    //         <p>
    //             {count}
    //         </p>
    //     </div>

    // )

        const [count, setCount] = useState(0);
        const [calculation, setCalculation] = useState(0);
        const [user , setuser] = useState("");
      
        useEffect(() => {
          setCalculation(() => count * 2);
        }, [user]); // <- add the count variable here
      
        return (
          <>
            <p>Count: {count}</p>
            <button onClick={() =>{
                setCount((c) => c + 1)
                setuser("Dharmik")
            }
                 }>+</button>
            <p>Calculation: {calculation}</p>
            <p>{user}</p>
          </>
        );
      }

export default State;