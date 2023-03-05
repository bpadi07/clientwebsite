import { Link } from 'react-router-dom';
import TabMenu from "../components/tabmenu";
import PopularCourses from '../components/PopularCourses';
import CourseProperties from '../components/CourseProperties';

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
                <div className="add-to-wishlist">
                    <Link to="/" >
                        <p><i className="fa fa-heart-o"></i>Add to Wishlist</p>
                    </Link>
                </div>
                <Link to="/" className="enroll-btn">
                    <b>ENROLL COURSE</b>
                </Link>
               <CourseProperties />

                <PopularCourses />

                <div className="working-day-hours">
                <h3>Working hours</h3>
                <div className="working-hours">
                    <p>Monday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Tuesday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Wednesday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Thursday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Friday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Saturday</p> <p>Closed</p>
                </div>
                <div className="working-hours">
                    <p>Sunday</p> <p>Closed</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default CourseDetails;