import { useState } from 'react'
import Heading from './componants/Heading/Heading';
import List from './componants/List/List';
import ClassList from './componants/ClassCom/ClassList';
import Test from './componants/Test/Test';
import State from './componants/State/State';
import Keys from './componants/Keys/Keys';
import Uncontrolled from './componants/Uncontrolled/Uncontrolled';
import Controlled from './componants/Controlled/Controlled';
import Formoptimise from './componants/Formoptimise/Formoptimise';
import Dynamic from './componants/Dynamicform/Dynamicform';
import './App.css'

function App() {
  
  // let lists = ["Mobile" ,"T.v" ,"Head-phone" ,"Laptop" , "computer"];
  let list1 = [{id:1 , name:"raj"}, {id:2 , name:"prs"}]

  return (
    <div>
      {/* <ClassList/> */}
      {/* <Heading/> */}
      {/* <List menu={lists} name="Dhruvil Patoliya"/> */}
      {/* <Test/> */}
      {/* <State/> */}
      {/* <Keys menu={list1}/> */}
      {/* <Uncontrolled/> */}
      {/* <Controlled/> */}
      <Formoptimise/>
      {/* <Dynamic/> */}
    </div>
  )
}

export default App
