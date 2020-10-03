import React, { Component } from 'react';
import './student.css';
class Student extends Component{
  render(){
    return (
      <div className="student">
          
          <div className="left">
              <h2 className="studentName">Shahzaib</h2>
              <p className="University">NED University</p>
          </div>
          <div className="right">
              <div className="score">350</div>
          </div>
        
     </div>
    );
  }
}
 
 
export default Student;
