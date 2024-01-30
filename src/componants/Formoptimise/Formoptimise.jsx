import React, { useState } from "react";

const Formoptimise = () => {
    const [inputValue, setInputValue] = useState({
        fname : '',
        lname : '',
        email : '',
        age : '',
    });

    const [pValue , setPvalue] = useState({
        fname : '',
        lname : '',
        email : '',
        age : '',
    });
  
    const HandleChange = (e) => {
      console.log("Change event", e.target.value);
      let name = e.target.name;
      setInputValue({...inputValue , [name] : e.target.value});
    }
  
    const HandleSubmit = (e) => {
      e.preventDefault();
      console.log("inputValue",inputValue);
      setPvalue(inputValue);
      setInputValue({
        fname : '',
        lname : '',
        email : '',
        age : '',
      });
    }
  
    return (
        <div>
            <div className="container">
                <form onSubmit={HandleSubmit}>
                <label>Enter Your First Name:</label>
                <input type="text" name="fname" value={inputValue.fname} onChange={HandleChange} />
                <label>Enter Your Last Name:</label>
                <input type="text" name="lname" value={inputValue.lname} onChange={HandleChange} />
                <label>Enter Your Email:</label>
                <input type="email" name="email" value={inputValue.email} onChange={HandleChange} />
                <label>Enter Your Age:</label>
                <input type="number" name="age" value={inputValue.age} onChange={HandleChange} />
                <br />
                <button type="submit">Submit</button>
                </form>
            </div>
            <h1>First Name :  
                {pValue.fname}
            </h1>

            <h1>Last Name : 
                {pValue.lname}
            </h1>

            <h1>Email : 
                {pValue.email}
            </h1>

            <h1>Age :
                {pValue.age}
            </h1>
        </div>
    )
  }

export default Formoptimise;  