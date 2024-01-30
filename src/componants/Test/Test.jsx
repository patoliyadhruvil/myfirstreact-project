import React from "react";

class Test extends React.Component{

    constructor(){

        super()
        this.state = {name : "Raj Patel" , Age: 20}

        
    }

    componentDidMount(){

        console.log("Component Mounting...")

    }

    changeName(){
            
       this.setState({name : "Pal Patel" })

    }
    
    Age(){
   
        this.setState({Age :30})
 
     }

    render(){

        return(
            
            <div>
                <p>
                    My Age is {this.state.Age}
                </p>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>
                    Click
                </button>
                <button onClick={this.Age.bind(this)}>
                    Age
                </button>
            </div>
            

        )

    }

    componentDidUpdate(){

        console.log("Component Update...");

    }

 
}

export default Test;