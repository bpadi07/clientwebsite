import React from 'react';

const ItConsulting = () => {
  return (
    <>
      <div className="consulting-main1">
        <h2 className="consulting-title">IT CONSULTING</h2>
      </div>

      <div className="consulting-main3">
        <div className="consulting-col1">
          <div className="consulting-content">
            <img className="consulting-img" src="consulting-img.jpg" alt="Consulting Image" />
            <h4>Expert IT Consulting Services</h4>
            <p>
              Our team of experienced IT consultants provides expert guidance and tailored solutions to help businesses make strategic technology decisions and optimize their IT infrastructure. We understand the challenges businesses face and work closely with our clients to deliver results that drive growth and efficiency.
            </p>
          </div>

          <div className="consulting-content">
            <img className="consulting-img" src="assessment-img.jpg" alt="IT Infrastructure Assessment Image" />
            <h4>IT Infrastructure Assessment</h4>
            <p>
              We conduct comprehensive assessments of your IT infrastructure to identify areas for improvement, enhance performance, and ensure optimal functionality. Our assessments cover network infrastructure, security, hardware, software, and more. We provide detailed reports and recommendations to help you make informed decisions.
            </p>
          </div>

          <div className="consulting-content">
            <img className="consulting-img" src="strategy-img.jpg" alt="IT Strategy and Planning Image" />
            <h4>IT Strategy and Planning</h4>
            <p>
              Our IT strategy and planning services help businesses align their technology initiatives with their overall goals and objectives. We work closely with you to understand your business requirements and develop strategic IT plans, roadmaps, and implementation strategies. Our goal is to help you leverage technology to drive growth and competitive advantage.
            </p>
          </div>

          {/* Add more consulting content as needed */}
        </div>

        <div className="consulting-col2">
          <img className="consulting-banner-img" src="consulting-banner.jpg" alt="Consulting Banner" />
        </div>
      </div>
    </>
  );
};

export default ItConsulting;
