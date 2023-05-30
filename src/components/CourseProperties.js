import { useState,useEffect } from 'react'; 
import { db } from '../firebase';
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
const CourseProperties = () => {

    const [count, setCount] = useState(0);
  const courseName = 'SharePoint';
  const usersCollection = collection(db, "course-enrol-user");

  useEffect(() => {
    const q = query(usersCollection, where("course", "==", courseName));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCount(snapshot.size);
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, [usersCollection, courseName]);

    return (
        <div>
            <div className='course-info'>
                <p>Enrolled: {count} Student</p>
            </div>
            <div className='course-info'>
                <p>Lectures: 0</p>
            </div>
        </div>
    );
}
export default CourseProperties;