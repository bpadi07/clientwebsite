import { Link } from 'react-router-dom';

const courses = () => {
  return (
    <>
      <div className="courseMain">
        <div className="courseHeader">
          <h1>Courses</h1>
        </div>
        <div className="courseContent">
          <div className="courseList">
            <div className="courseThumbnail">
              <img src="https://codenovas.com/wp-content/uploads/2022/04/MSPowerApp-272x161.jpg" alt="" />
              <Link to="/" className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link>
            </div>
            <div className="courseDescription">
              <p>Microsoft</p>
              <Link to="sharepoint"><h3>SharePoint (PowerApps)</h3></Link>
              <p>Microsoft PowerApps: Learn Power Apps & Be Pro At PowerApps</p>
              <h3>Free</h3>
            </div>
          </div>

           <div className="courseList">
            <div className="courseThumbnail">
              <img src="https://codenovas.com/wp-content/uploads/2022/04/MSSharePoint-272x161.jpg" alt="" />
              <Link to="/" className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link>
            </div>
            <div className="courseDescription">
              <p>Microsoft</p>
              <Link to="mssharepoint"><h3>MS SharePoint</h3></Link>
              <p>This course will provide you instructions on using SharePoint Online, including Team Sites and OneDrive for Business.</p>
              <h3>Free</h3>
            </div>
          </div>
        </div>
      </div>
    </>

  )

};

export default courses;