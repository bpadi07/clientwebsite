import { Link } from 'react-router-dom';
import TabMenu from "../components/tabmenu";

const CourseDetails = () => {
    return (
        <div className="course-deatails-container">
            <div className="course-deatails-col1">
                <h1>SharePoint (PowerApps)</h1>
                <div className="course-tags">
                    <div className="course-tag-elements">
                        <p>Teacher</p>
                        <h4>CODENOVASADMIN</h4>
                    </div>
                    <div className="course-tag-elements">
                        <p>Category:</p>
                        <h4>MICROSOFT, SHAREPOINT</h4>
                    </div>
                </div>
                <TabMenu />
            </div>
            <div className="course-deatails-col2">
                <div>
                    <p>Add to Wishlist</p>
                </div>
                <Link to="/" className="enroll-btn">
                    <b>ENROLL COURSE</b>
                </Link>
                <div>
                <div className='course-info'>
                    <p>Enrolled: 1 Student</p>
                </div>
                <div className='course-info'>
                    <p>Lectures: 0</p>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default CourseDetails;