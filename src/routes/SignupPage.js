
import {Link} from 'react-router-dom';

const SignupPage = () => {
    return (
    <>
            
  <div className="buttons">
   <div className="buttonBox">
     <Link to='/signupinstructor/*'><button className="SI_button"> INSTRUCTOR SIGNUP</button></Link>
  
     <Link to='/signupstudent/*'> <button className="SI_button"> STUDENT SIGNUP </button> </Link>
   </div>
  </div>










    </>
    );
  };
  
export default SignupPage;