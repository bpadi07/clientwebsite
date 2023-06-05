import React from 'react';

const StudentConsulting = () => {
  return (
    <>
      <div className="consulting-main1">
        <h2 className="consulting-title">STUDENT CONSULTING</h2>
      </div>

      <div className="consulting-main2">
        <div className="consulting-col1">
          <div className="consulting-content1">
            <h4>Unlock Your Potential for a Successful Future</h4>
          </div>
          <br />
          <div className="consulting-content2">
            <div>
              <i className="fa fa-star"></i>
              <h1 className="consulting-heading">Personalized Guidance for Student Success</h1>
            </div>
            <div>
              <p>
                At Code Novas, we provide comprehensive consulting services for students to help them navigate their way
                towards a successful future. We understand that each student is unique, so we offer personalized guidance
                tailored to your interests, strengths, and aspirations.
              </p>
              <p>
                Our experienced consultants will assess your skills, interests, and goals to create a customized plan
                that aligns with your academic and career objectives. Whether you need assistance with:
              </p>
              <ul>
                <li>Course selection</li>
                <li>Career planning</li>
                <li>Skill development</li>
              </ul>
              <p>
                We're here to provide the support you need to thrive as a student and beyond.
              </p>
            </div>
          </div>
          <br />
          <div className="consulting-content3">
            <div>
              <i className="fa fa-star"></i>
              <h1 className="consulting-heading">Comprehensive Support for Academic and Career Growth</h1>
            </div>
            <div>
              <p>
                We offer a range of services to help students excel academically and prepare for a successful career.
                Our team provides guidance on:
              </p>
              <ul>
                <li>Choosing the right majors</li>
                <li>Selecting courses</li>
                <li>Developing essential skills for the job market</li>
              </ul>
              <p>
                We also offer internship and job placement assistance, helping you secure valuable opportunities that
                align with your interests and goals.
              </p>
              <p>
                Additionally, we provide mentorship, networking opportunities, and access to resources to enhance your
                personal and professional development. We're committed to your success, and we'll support you throughout
                your journey as a student, helping you make informed decisions and achieve your goals.
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="consulting-col2">
          <img
            className="consulting-img"
            src="https://example.com/student-consulting-image.jpg"
            alt="consulting-img"
          />
        </div>
      </div>

      <div className="consulting-main3">
        <div className="consulting-contact">
          <h3>Ready to Unlock Your Potential?</h3>
          <p>Contact us today to schedule a consultation and start your journey towards a successful academic and
            professional future.</p>
          <div className="contact-info">
            <p>Phone: [Phone Number]</p>
            <p>Email: [Email Address]</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentConsulting;
