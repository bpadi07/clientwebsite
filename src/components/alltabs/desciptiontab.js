import React from "react";
const DescriptionTab = () => {
  return (
    <div className="course-desc-tab">

      <img src="https://codenovas.com/wp-content/uploads/2022/04/MSPowerApp-866x440.jpg" alt="MSPowerApp" />
      <p>
        Several teams employ SharePoint lists to access, share, and cooperate about organized data.  So, the ability to form apps utilizing PowerApps that take advantage of SharePoint lists as a data source was an essential capability.
      </p>
      <p>
        Power Apps is a part of the Microsoft 365 suite, but it’s separated from a SharePoint. Power Apps is created to work with a wide variety of database sources; it can surely be connected to any SharePoint list, library, or One Drive, enabling you to extract or store information without any databases and SQL knowledge. Additionally, it is entirely integrated into the SharePoint web and mobile experience, that is itself connected to the data stored in SharePoint lists.
      </p>
      <h1>Main Features</h1>
      <div className="course-main-features">
        <div className="course-features">
          <ul>
            <li>What is PowerApps and how does it work with SharePoint</li>
            <li>Customizing SharePoint List Forms with PowerApps</li>
            <li>Building a standalone PowerApps App with SharePoint as a data source</li>
            <li>What is Power Automate and how does it work with SharePoint</li>
          </ul>
        </div>
        <div className="course-features">
          <ul>
            <li>Build a flow to approve and log your SharePoint content</li>
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