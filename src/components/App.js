import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import WebDesign from '../routes/WebDesign';
import SEO from '../routes/SEO';
import Services from '../routes/Services';
import Layout from './Layout';
import Frontend from '../routes/Frontend';
import PHP from '../routes/PHP';
import Node from '../routes/Node';
import AboutWho from '../routes/AboutWho';
import OurValues from '../routes/OurValues';
import WebDev from '../routes/WebDev';
import Login from '../routes/Login';
import AboutUs from '../routes/AboutUs';
import Courses from '../routes/Courses';
import ItConsulting from '../routes/ItConsulting';
import ItPlacement from '../routes/ItPlacement';
import Ittraning from '../routes/Ittraning';
import CourseDetails from '../routes/CourseDetails';
import Signup from '../routes/Signup';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="login" element={<Login />} />          
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="IT-Consulting" element={<ItConsulting />} />
          <Route path="IT-Placement" element={<ItPlacement />} />
          <Route path="IT-training" element={<Ittraning/>}/>
          <Route path="courses/*" element={<CourseDetails/>}/>
          <Route path="login/*" element={<Signup/>}/>
          
          <Route path="*" element={<p>Not found!</p>} />
           
        </Route>
      </Routes>
      
    </>
  );
};

export default App;
