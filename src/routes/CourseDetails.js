import { Link } from 'react-router-dom';
import TabMenu from "../components/tabmenu";
import PopularCourses from '../components/PopularCourses';
import CourseProperties from '../components/CourseProperties';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseDetails = () => {

    const [newUser, setUser] = useState("");
    const [newGmail, setGmail] = useState("");
    const [isReg, setIsReg] = useState(false)
   
const cource_name = 'SharePoint';

const usersCollection = new collection(db,"course-enrol-user");

const registerUser = async () => {
    
    if(!newUser && !newGmail){
        toast.error('Enter email and password', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    else
    {
    await addDoc(usersCollection, {user_name:newUser, gmail:newGmail, course:cource_name });
    setUser('');
    setGmail('');
    toast.success('Registered successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
    
}


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
                
                <input value={newGmail} className="course-user-register-input" placeholder="Enter your email address" onChange={(event)=>{setGmail(event.target.value)}} required/>
                <input value={newUser} className="course-user-register-input" placeholder="Enter your Full name" onChange={(event)=>{setUser(event.target.value)}} required />
                
                < >
                    <button className="enroll-btn" onClick={registerUser}>ENROLL COURSE</button>
                </>
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
            <ToastContainer />
            </div>
        </div>
    );
};


export default CourseDetails;