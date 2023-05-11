import React from "react";
import {useParams} from "react-router-dom";
import courseData from '../../coursedata';



const ReviewTab = () => {

  const {courseId} = useParams();

  const thisCourse = courseData.find(cour => cour.id === courseId)
  return (
    <div className="course-review-tab">
      <p>{thisCourse.review}</p>
      {/* First tab content will go here */}
    </div>
  );
};
export default ReviewTab;