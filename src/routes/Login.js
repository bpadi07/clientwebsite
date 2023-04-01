
import Google from "../img/btn_google_img.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { Link } from 'react-router-dom';

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

  return (
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
        <div className="login-right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="rem-frgotpass">
             <label><input type="checkbox"/>Remember me</label>
             <Link to="/" ><h5>Forgot password</h5></Link>
          </div>
          <button className="login-submit">Login</button><br></br>
          <p className="signup_link">Don't have an account? <Link to='/login/*'>Signup</Link></p>
        </div>
        </div>
    </div>
  );
};

export default Login;
