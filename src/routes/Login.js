import Google from "../img/btn_google_img.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import validation from "../schemas/validation";


const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  
  
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
 
  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value});
  
  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors(validation(values));
    
  }

  const postData = async (e) => {
     const{name,password} = values;
    const rest = await fetch ("https://reactlogin-d3ee8-default-rtdb.firebaseio.com/reactlogin.json", {
      method: "POST",
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),

    }
    );

    if(rest){
      setValues({
    name: '',
    password: ''})

    alert("login successfully")
    }
    
  }      
  
  
return (
  <form onSubmit={handleSubmit} Method="POST">
    <div className="login">
      
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="loginButton google-login-btn" onClick={google}>
            <img src={Google} alt="" className="icon" />
           
          </div>
          <div className="loginButton facebook-login-btn" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github-login-btn" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
       
       
       
        <div className="login-right" onSubmit={{handleSubmit}} >
          <input type="text" placeholder="Username" value={values.name}  name="name" autocomplete="off"  onChange={handleChange} />
          {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        
          <input type="password" placeholder="Password" value={values.password}  name="password" onChange={handleChange}
          /> {errors.password && <p style={{color: "red"}}>{errors.password}</p>}        
          
          <div className="rem-frgotpass">
             <label><input type="checkbox"/>Remember me</label>
             <Link to="/" ><h5>Forgot password</h5></Link>
          </div>
          <button className="login-submit" onClick={postData}>Login</button>
          <p className="signup_link">Don't have an account? <Link to='/login/*'>Signup</Link></p>
        </div>
        
        
       </div> 
       
       </div>
       </form>
       
  );
};

export default Login;
