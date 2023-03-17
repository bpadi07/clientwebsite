import { Link } from 'react-router-dom';
import { coursesdata } from '../staticdata/staticdata';



const courses = () => {
  return (
    <>
      <div className="courseMain">
        <div className="courseHeader">
          <h1>Courses</h1>
        </div>
        <div className="courseContent">
         

        {Object.keys(coursesdata).map((key, index) => {
          return (
          <div className="courseList">
            <div className="courseThumbnail">
              <img src={coursesdata[key].thumbnail} alt="" />
              <Link to={coursesdata[key].url} className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link>
            </div>
            <div className="courseDescription">
              <p>{coursesdata[key].brand}</p>
              <Link to={coursesdata[key].url}><h3>{coursesdata[key].title}</h3></Link>
              <p>{coursesdata[key].short_dec}</p>
              <h3>{coursesdata[key].subscription_type}</h3>
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