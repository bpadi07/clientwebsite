import React from "react";
import {useParams} from "react-router-dom";
import courseData from "../../coursedata";


const DescriptionTab = () => {

   const {courseId} = useParams();
   const thisCourse = courseData.find(cour => cour.id === courseId)
  return (
    <div className="course-desc-tab">

      <img src={thisCourse.discription.image_url} alt="MSPowerApp" />
      <p>{thisCourse.discription.para_1}</p>
      <p>{thisCourse.discription.para_2}</p>
      <h1>{thisCourse.discription.main_tit}</h1>
      <div className="course-main-features">
        <div className="course-features">
          <ul>
            <li>{thisCourse.discription.cours_list.li_1}</li>
            <li>Customizing SharePoint List Forms with PowerApps</li>
            <li>Building a standalone PowerApps App with SharePoint as a data source</li>
            <li>What is Power Automate and how does it work with SharePoint</li>
          </ul>
        </div>
        <div className="course-features">
          <ul>
            <li>{thisCourse.discription.cours_list.li_1}</li>
            <li>Build a Flow to import a File, create items, post to Teams, and error checking</li>
            <li>Connect Power Apps and Flow to make a PDF of your SharePoint data</li>
          </ul>
        </div>
      </div>
      <h1>What is the target audience?</h1>
      <p>
      In the world of the information worker, you will handle information that is probably stored across different software suites, like SharePoint, Salesforce, Excel file, Access database, … Typically, you would like your end-users to be able to browse and/or modify this data in a general user-friendly, and preferably mobile, way. Microsoft Power Apps allows people, without any development skills, to build applications that are mobile-friendly on top of their data. Allowing other people to use the built application to browse the data and maybe even modify it.
      </p>
    </div>
  );
};
export default DescriptionTab;