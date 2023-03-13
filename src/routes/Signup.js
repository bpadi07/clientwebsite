import React from 'react'
import Select from 'react-select';
const Signup = () => {
  
    return (
    <>
<div className="container">
   <div className="form-box">
  <div className="title">Registration</div><br></br>
    <form action="#">
        <div className="user-details">
          <div className="input-box">
              <span className="details">Username</span>
              <input type="text" name="username" placeholder="Enter your username"/>
          </div> 
          <div className="input-box">     
              <span className="details">Email</span>
              <input type="text" name="Email" placeholder="Enter your Email"/>
          </div>
           
          <div className="input-box">   
              <span className="details">Password</span>
              <input type="password " name="Password" placeholder="Enter your Password"/>
          </div> 
          <div className="input-box">   
                <span className="details">Password Again</span>
                <input type="text" name="Password Again" placeholder="Password Again"/>
          </div>
          <div className="input-box">      
              <span className="details">First name</span> 
              <input type="text" name="First Name" placeholder=" First name"/>
          </div>
          <div  className="input-box">   
              <span className="details">Last Name</span>
              <input type="text " name="Last Name" placeholder="Last Name"/>
         </div>
         </div>      
            <div className="input-box">
                <span className="details">Mobile No</span>
                <input type="text" name="Mobile No" placeholder="Mobile No"/>
            </div> 
            <div className="input-box">
                <span className="details">Highest Academic Level</span>
                <div>
                  <select>
                    <option value="No high School">No high School</option>
                    <option value="Highschool or equivalent">Highschool or equivalent</option>
                    <option value="Technical or occupational certificate">Technical or occupational certificate</option>
                    <option value="Associate degree">Associate degree</option>
                    <option value="Some college coursework">Some college coursework</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>    
            </div>     
              
            <div className="chkbox">
              <lable>
                <input type="checkbox"/>
                I agree with storage and handling of my data by this website.
              </lable>
            </div> 
            <div className="chkbox"> 
              <lable>
                <input type="checkbox"/>
                 Register as Instructor
              </lable> 
            </div>
              <div>
                <button className="btn">Registration</button>   
              </div>
            </form>
    </div>
          
    </div>      
       

    
    </>
    )
  };
  
  export default Signup;
  