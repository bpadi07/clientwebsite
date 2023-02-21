
const AboutUs = () => {
  return (
<>
  <div className="main-div">      
    <div className="col1">
       <div className="welcome-title">
           <h2>WelCome to CodeNovas!</h2>
       </div>
    
       <div  className="purpose">
          <h4>purpose</h4>
            <p>
                <span>Code nova is an educational and sport funs website for <b>Guest</b>, <b>Subscriber</b>, <b>Collaborator</b> and <b>Student</b> either to learn or teach the whole course or use specific section of the course as a reference via video or text or sport fans to watch live or highlight NFL and Premier League games.</span>
            </p>
        </div>

        <div className="Feature">
          <h4>Feature</h4>
            <p>
              <span>Website will contain Programming languages, Data Science, MuleSoft, SQL etc. (to be added) courses. Courses will have both YouTube linked video or Text. Code nova users will have the free and membership with fee service.
                </span>
            </p> 
         </div>  

         <div className="TargetUser">
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
               


    </div>
    <div  className="col2">
       <img  width="500" height="500"src="https://codenovas.com/wp-content/uploads/2018/07/cat_2-1-1024x684.jpg" alt="painting"/>
    </div>
  </div>
</>
  );
  
  
 
};
export default AboutUs;