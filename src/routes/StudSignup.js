import Select from 'react-select';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function StudSignup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
    
      const options = [
       {value:"No high School" ,label: "No high School"},
       {value:"Highschool or equivalent" ,label: "Highschool or equivalent"},
       {value:"Technical or occupational certificate",label: "Technical or occupational certificate"},
       {value:"Associate degree",label: "Associate degree"},
       {value:"Some college coursework",label: "Some college coursework"},
       {value:"Bachelor's degree",label: "Bachelor's degree"},
       {value:"Master's degree",label: "Master's degree"},
       {value:"Doctorate",label: "Doctorate"},
       {value:"Professional",label: "Professional"},
  
      ]
  
      const [show,setShow]=useState(false)
  
      return (
      <>
  <div className="container">
     <div className="form-box">
    <div className="title">Registration</div><br></br>
      <form action="#">
          <div className="user-details">
            <div className="input-box">
                <span className="details">Username</span>
                <input type="text" name="username" placeholder="Enter your username"  onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }/>
            </div> 
            <div className="input-box">     
                <span className="details">Email</span>
                <input type="text" name="Email" placeholder="Enter your Email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }/>
            </div>
            
             
            <div className="input-box">   
                <span className="details">Password</span>
                <input type="password " name="Password" placeholder="Enter your Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }/>
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
                    <Select options={options}  placeholder="select your choice"/>
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
                  <input type="checkbox" onClick={()=>setShow(!show)}/>
                   Register as Instructor
                </lable> 
                <div className="chk-input">
                <div className="input-box">
                 { 
                 show?<span className="details">Degree</span>:null
                 }
                  {
                   show? <input type="text" name="Degree" placeholder="Degree"/>:null
                  }
                </div> 
                <div className="input-box">
                  {
                  show?<span className="details">Expertise</span>:null
                  }
                  {
                  show?<input type="text" name="Expertise" placeholder="Expertise"/>:null
                  }
                </div> 
                </div>
  
              </div>
                <div>
                  <button className="btn" onClick={handleSubmission} disabled={submitButtonDisabled}>Registration</button>   
                </div>
              </form>
      </div>
            
      </div>      
         
  
      
      </>
      )
    };
    

export default StudSignup