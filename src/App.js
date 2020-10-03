import React, { Component } from 'react';
import  Student from "./Student";


class App extends Component{
  render(){
    return (
      <div className="App">
      <h1 className="leadersboardHeading">Leaders Board</h1>
       <Student name ="John Doe" university="NED University " score ={350}/>
       <Student name ="Shazaib Khan" university="University of Malaya" score ={350}/>
       <Student name ="Misha Akram" university="NED University " score={349}/>
       <Student name ="John Doe" university="NED University " score={348}/>
       <Student name ="John Doe" university="NED University " score={346}/>
      

     </div>
    );
  }
}
 
 
export default App;
