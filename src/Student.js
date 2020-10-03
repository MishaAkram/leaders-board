import React, { Component } from 'react';
import './student.css';
class Student extends Component{
  constructor(){
    super();
    this.state={
        score:0,
        success:false,
        failure:false
    }
}

componentDidMount(){
this.setState({
score:this.props.score
})
}

addscore(){
    this.setState({
        score:this.state.score+1
    },
    ()=>{if(this.state.score>=350){
        this.setState({success:true, failure:false})
    }})
}

decscore(){
    this.setState({
        score:this.state.score-1 
    },
    ()=>{if(this.state.score<=350){
        this.setState({failure:true,success:false})
    }})
}
render(){
const isSuccess=this.state.success;
const isFailure=this.state.failure;
let text;
if(isSuccess){
text=<span>Success</span>  
}
else if(isFailure){
text=<span id="fail">Fail</span>
}

  
    return (
      <div className="student">
          
          <div className="left">
          <h2 className="studentName">{this.props.name}
        <button className="addScorebtn" onClick={()=>this.addscore()}>+</button>
        <button className="decScorebtn" onClick={()=>this.decscore()}>-</button></h2>
              <h2 className="studentName">{this.props.name}</h2>
              <p className="University">{this.props.university}</p>
          </div>
          <div className="right">
              <div className="score">{this.props.score}</div>
          </div>
        
     </div>
    );
  }
}
 
 export default Student;
