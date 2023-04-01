
const AboutUs = () => {
  return (
<>
<div className="main-div">      
  <div className="col1">
       <div className="welcome-title">
           <h2>WelCome to CodeNovas!</h2>
       </div>
    
       <div  className="content">
          <h4>purpose</h4>
            <p>
                <span>Code nova is an educational and sport funs website for <b>Guest</b>, <b>Subscriber</b>, <b>Collaborator</b> and <b>Student</b> either to learn or teach the whole course or use specific section of the course as a reference via video or text or sport fans to watch live or highlight NFL and Premier League games.</span>
            </p>
        </div>

        <div className="content">
          <h4>Feature</h4>
            <p>
              <span>Website will contain Programming languages, Data Science, MuleSoft, SQL etc. (to be added) courses. Courses will have both YouTube linked video or Text. Code nova users will have the free and membership with fee service.
                </span>
            </p> 
         </div>  

         <div className="content">
         <h4>Target User</h4>
         </div>
           <div className="list">
             <ul>
               <li>
                 <b>Guest</b>
                   <span style-prop-object="fond-weight=400" margin="10px">:who can view post part of the pages but cannot do create, read, update, delete or comment a collaborative’s page.</span> 
                </li>
                <li>
                 <b>Subscriber</b>
                   <span style-prop-object="fond-weight=400" margin="10px">:can read, comment on collaboratives page.</span> 
                </li>
                <li>
                 <b>Collaborator</b>
                   <span style-prop-object="fond-weight=400" margin="10px">:can do crud on their post, can comment others post as well.</span> 
                </li>
                <li>
                 <b>Student</b>
                   <span style-prop-object="fond-weight=400" margin="10px">:who chooses to take a specific course. can access everything from that course.</span> 
                </li>
             </ul>
             </div>

             <div className="content">
              <h4>Unordered & Ordered Lists</h4><br></br>
              <pre className="fa fa-thumbs-up" style-prop-object="font-size:50px" color="yellow">           Online Courses with full discount systems.</pre><br></br><br></br>
              <pre className="fa fa-thumbs-up" style-prop-object="font-size:50px" color="yellow">           Online Certificates which can be used worldwide</pre>
              </div><br></br>
            <div className="col1-img">
              <img height="300" width="500" src="https://codenovas.com/wp-content/uploads/2018/05/course_image-2-1024x682.jpg" alt="computer lmg"/>
            </div>
  </div>
  <div  className="col2">
      <div>
       <img  width="550" height="500"src="https://codenovas.com/wp-content/uploads/2018/07/cat_2-1-1024x684.jpg" alt="painting"/>
      </div><br></br>
     <div className="aboutus-skill">
      <h3>Skill</h3>
      </div>
      <div className="aboutusskill-title">
      <h4 >Professional Certificate Courses (Online)</h4>
        <ul>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online certificates can be obtained in a range of specialized areas.</span>
             </li>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online associate degrees usually take approximately two years then</span>  
             </li>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online preparatory year programs are an opportunity for students..</span>
             </li>
             <li>
                  <span style-prop-object="fond-weight=400" margin="10px">Online Summer courses are a great way to gain qualifications.</span>   
             </li>        
        </ul>
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
          <img  height="300" width="400" src="https://codenovas.com/wp-content/uploads/2018/07/certificate-2-480x380.png" alt="g-certificate"/><br></br>
           
          <h4>Google Certified</h4>       
        </div>
        <div className="col4">
          <img height="300" width="400" src="https://codenovas.com/wp-content/uploads/2018/07/certificate-2-480x380.png" alt="m-certificate"/><br></br>
          
          <h4>Microsoft Certified</h4>
        </div>    
        <div className="col5">
          <img height="300" width="400" src="https://codenovas.com/wp-content/uploads/2018/07/certificate-2-480x380.png" alt="a-certificate"/><br></br>
          <h4>Apple Certified</h4>
          </div>
</div>


    
</>

  );
  
  
 
};
export default AboutUs;