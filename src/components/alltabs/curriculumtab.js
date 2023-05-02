import React from "react";
import Coursedata from '../../coursedata';


const CurriculumTab = () => {
  return (
    <>
    <div className="course-curriculam-tab" >
       {
        Coursedata.map(course =>{
          return(
            <div className="curricontent" key={course.id}>
            <p>{course.curiculam}</p>
            </div>
          )
      
        })}
    </div>
   
   
    </>
  )
};
export default CurriculumTab;