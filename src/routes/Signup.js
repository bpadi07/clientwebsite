import Select from 'react-select';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import {signupSchema} from '../schemas/signupvalidation';


const initialValues = {
  username: '',
  Email: '',
  Password: '',
  Password_Again: '',
  First_Name: '',
  Last_Name: '',
  Mobile_No: '',
  instructChk: false,
  Degree: '',
  Expertise: '',
};

const Signup = () => {
  
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

    ];
    
    
    const[show, setShow] = useState(false);    
    
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (e) =>{
    
         setIsChecked(e.target.checked);
    
        };

      
     const { values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
      initialValues: initialValues,  //if key and vaues is same so we dont need to write w
      validationSchema: signupSchema,
      onSubmit: (values, action) => {  
      console.log(values);

        action.resetForm();

      },
      
    });

     
    
    return (
    <>
<div className="container">
   <div className="form-box">
  <div className="title">Registration</div><br></br>
    <form action="#" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box"> 
              <span className="details">Username</span>
              <input type="text" name="username" placeholder="Enter your username" value={values.username}  onChange={handleChange} onBlur={handleBlur}/>          
              {errors.username && touched.username ? (<p className="form_error" style={{color:"red"}}>{errors.username}</p>) : null} 
              </div>                                                               
          <div className="input-box">     
              <span className="details">Email</span>
              <input type="text" name="Email" placeholder="Enter your Email" value = {values.Email} onChange={handleChange} onBlur={handleBlur}/>
              {errors.Email && touched.Email ? (<p className="form_error">{errors.Email}</p>) : null}
          </div>
           
          <div className="input-box">   
              <span className="details">Password</span>
              <input type="password " name="Password" placeholder="Enter your Password" value={values.Password} onChange={handleChange} onBlur={handleBlur} />
              {errors.Password  && touched.Password  ? (<p className="form_error">{errors.Password }</p>) : null}
          </div> 
          <div className="input-box">   
                <span className="details">Password Again</span>
                <input type="text" name="Password_Again" placeholder="Password Again" value={values.Password_Again} onChange={handleChange} onBlur={handleBlur}/>
                { errors.Password_Again  && touched.Password_Again  ? (<p className="form_error">{errors.Password_Again }</p>) : null}
          </div>
          <div className="input-box">      
              <span className="details">First name</span> 
              <input type="text" name="First_Name" placeholder=" First name" value={values.First_Name} onChange={handleChange} onBlur={handleBlur}/>
              { errors.First_Name  && touched.First_Name  ? (<p className="form_error">{errors.First_Name }</p>) : null}
          </div>
          <div  className="input-box">   
              <span className="details">Last Name</span>
              <input type="text " name="Last_Name" placeholder="Last Name" value={values.Last_Name} onChange={handleChange} onBlur={handleBlur}/>
              { errors.Last_Name  && touched.Last_Name  ? (<p className="form_error">{errors.Last_Name }</p>) : null}
         </div>
         </div>      
            <div className="input-box">
                <span className="details">Mobile No</span>
                <input type="text" name="Mobile_No" placeholder="Mobile No" value={values.Mobile_No} onChange={handleChange} onBlur={handleBlur}/>
                {errors.Mobile_No && touched.Mobile_No ? <p className="form_error">{errors.Mobile_No}</p> : null}
            </div> 
            <div className="input-box">
            
                <span className="details" >Highest Academic Level</span>
                <div>
                  <Select options={options}  placeholder="select your choice"/>
                </div>    
            </div>     
              
            <div className="chkbox">
              <lable>
                <input type="checkbox" onChange={handleCheckboxChange}/>
                I agree with storage and handling of my data by this website.
              </lable>
            </div> 
            <div className="chkbox"> 
              <lable>
              
                <input type="checkbox" name="instructChk" value={values.instructChk} onChange={handleChange} onBlur={handleBlur} onClick={()=>setShow(!show)}/>
                Register as Instructor</lable> 
              
              
             <div className="chk-input">
             
               <div className="input-box">
              { show ? <span className="details">Degree</span> : null }
              {show ?  <input type="text" name="Degree" placeholder="Degree" value={values.Degree} onChange={handleChange} onBlur={handleBlur}/>: null}
                { show ? errors.Degree && touched.Degree ?(<p className="form_error">{errors.Degree}</p> ) : null: null}
                </div> 
              <div className="input-box">
                {
                
                show ? <span className="details">Expertise</span> : null
                }
                {
                
                show ? <input type="text" name="Expertise" placeholder="Expertise" value={values.Expertise} onChange={handleChange} onBlur={handleBlur}/> : null
                }
                { errors.Expertise && touched.Expertise ? (<p className="form_error">{errors.Expertise}</p>): null }
                </div> 
              </div>
        
            </div>
            
           
              <div>
               <button className="btn" disabled={!isChecked} >Registration</button> 
              </div>
            </form>
    </div>
          
    </div>      
    
    </>
    )
  };
  
  export default Signup;
  