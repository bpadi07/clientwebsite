import { Link} from 'react-router-dom';
import React from 'react';
import Coursedata from '../coursedata';


const courses = () => {
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

             
             <Link to={course.url} className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link>
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