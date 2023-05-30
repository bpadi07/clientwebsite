import { Link} from 'react-router-dom';
import React from 'react';
import Coursedata from '../coursedata';


const courses = () => {

  const isLoggedIn = window.localStorage.getItem("isSignup");
  return (
    <>
      <div className="courseMain">
        <div className="courseHeader">
          <h1>Courses</h1>
        </div>
        <div className="courseContent">
          {
          Coursedata.map(course =>{
            return(
              <div className="courseList">
             <div className="courseThumbnail" key={course.id}>
             <img src={course.thumbnail} alt="" />
             
             { isLoggedIn ?  
             <Link to={course.url} className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link> 
              : 
              <Link to="/login" className="coursePreviewButton">
                Login
              </Link>
              }
             
             
              </div>
              <div className="courseDescription">
              <p>{course.brand}</p>
              <Link to={course.url}><h3>{course.title}</h3></Link>
              <p>{course.short_dec}</p>
              <h3>{course.subscription_type}</h3>
              </div>
              </div>
              
          
            )
          })}
          </div>
          </div>
 </>
       )
  
    };


export default courses;