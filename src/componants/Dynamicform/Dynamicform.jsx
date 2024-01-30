import React, { useState } from "react";


const Dynamic = () => {
    const [inputValue, setInputValue] = useState([{
        name : 'raj',
        email : 'a@gmail.com',
    }]);

    const handleClick = () =>{

        setInputValue([...inputValue ,{
            name : '',
            email : '',
        }])
        
    }

    const [pValue , setPvalue] = useState([]);
  
    const HandleChange = (e , index) => {
    //   let name = e.target.name;
    //   let value = e.target.value;

    //   const list = [...inputValue]
    //   list [index][name] = value;
    //   setInputValue(list);

      const lists = [...inputValue]
      lists [index][e.target.name] = e.target.value;
      setInputValue(lists);

    }
  
    const HandleSubmit = (e) => {
      e.preventDefault();
      console.log("inputValue",inputValue);
      setPvalue(inputValue);
    }
  
    return (
        <div>
            <div className="container">
                <form onSubmit={HandleSubmit}>
                    {
                        inputValue.map((input , index)=>{
                            return(
                                <>
                                    <label>Enter Your First Name:</label>
                                    <input type="text" name="name" value={input.name} onChange={(e) => HandleChange(e , index)}/>
                                    <label>Enter Your Email:</label>
                                    <input type="email" name="email" value={input.email} onChange={(e) => HandleChange(e , index)} />
                                </>
                            )
                        })
                    }
                <br />
                <div className="dy">
                    <button type="button" onClick={handleClick} >Add More...</button>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>

            <div>
                {
                    pValue.map((d)=>{
                        return(
                            <div>
                                <h1>
                                    Name : {
                                        d.name
                                    }
                                </h1>
                                <h3>
                                    Email : {
                                        d.email   
                                    }
                                </h3>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
  }


export default Dynamic;
