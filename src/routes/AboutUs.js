import Google_Cloud_Associate_Engineer_certificate from '../img/Google_Cloud_Associate_Engineer_certificate.PNG'
import powerBi_certificate from '../img/powerBi_certificate.PNG'
import oracle_certificate from '../img/oracle_certificate.PNG'
import Mule_Certificate from '../img/Mule_Certificate.PNG'
const AboutUs = () => {
  return (
<>
<div className="main-div">    
  <div className="col1">
  <div className="welcome-title">
    <h2>Welcome to CodeNovas!</h2>
</div>

<div className="content">
  <h4 className="aboutus-heading">About Us</h4>
  <p className="aboutus-para">
    Code Nova is your premier online learning platform, offering a wide range of educational opportunities. Whether you're looking to enhance your programming skills, dive into data science, explore MuleSoft integration, or delve into SQL databases, we have the courses you need.
  </p>
</div>

<div className="content">
  <h4 className="aboutus-heading">Benefits</h4>
  <ul className="aboutus-benefits">
    <li>Extensive Course Catalog: Access a diverse range of courses covering various subjects and technologies.</li>
    <li>High-Quality Content: Learn from engaging video tutorials and comprehensive written resources.</li>
    <li>Flexibility and Convenience: Study at your own pace, anytime and anywhere.</li>
    <li>Interactive Learning Community: Engage with a vibrant community of learners, exchanging ideas and insights.</li>
    <li>Expert Instructors: Learn from industry professionals who are passionate about teaching.</li>
    <li>Personalized Learning Paths: Tailor your learning journey to your specific goals and interests.</li>
    <li>Recognition and Certificates: Earn certificates of completion to showcase your achievements.</li>
    <li>Affordable Membership Options: Access additional benefits with our membership plans.</li>
    <li>Continuous Updates and Support: Stay up to date with the latest content and receive ongoing support.</li>
  </ul>
</div>

<div className="content">
  <h4 className="aboutus-heading">Start Your Learning Journey Today!</h4>
  <p className="aboutus-para">
    Join CodeNova now and unlock a world of knowledge. Expand your skills, boost your career prospects, and discover the endless possibilities that learning with us can offer.
  </p>
</div>
  </div>   
</div>


  <hr></hr>

    <div  className="aboutus-certification">
    <br></br>
    <h3>Certifications</h3>
    </div>
<div className="main-div2">
        <div className="col3">
          <img  height="300" width="400" src={Google_Cloud_Associate_Engineer_certificate}  alt="g-certificate"/><br></br>
           
          <h4 >Google Certified</h4>       
        </div>
        <div className="col4">
          <img height="300" width="400" src={powerBi_certificate} alt="m-certificate"/><br></br>
          
          <h4>PowerBI Certified</h4>
        </div>    
        <div className="col5">
          <img height="300" width="400" src={oracle_certificate}  alt="a-certificate"/><br></br>
          <h4>Oracle Certified</h4>
          </div>
          <div className="col5">
          <img height="300" width="400" src={Mule_Certificate}  alt="a-certificate"/><br></br>
          <h4>Mulesoft Certified</h4>
          </div>
</div>


    
</>

  );
  
  
 
};
export default AboutUs;