import React from 'react';
import "./AboutUs.css";
import img3 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img1 from '../assets/img3.jpg';

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Epione Care</strong>, an innovative healthcare platform dedicated to enhancing patient care and medical efficiency through cutting-edge technology. At Epione Care, we bridge the gap between patients and healthcare providers by offering a seamless and user-friendly experience.

        </p>
        <p>
          Our platform empowers patients to conveniently book appointments with their preferred doctors, access detailed information through their personalized patient dashboard, and view comprehensive reports generated by our advanced machine learning models.

        </p>
        <p>
          For healthcare professionals, Epione Care provides tools to efficiently manage patient records, including adding new patients, uploading medical images, and analyzing diagnostic reports. Additionally, doctors can easily view and manage bookings made by patients.
        </p>
        <p>
          Epione Care specializes in the diagnosis and monitoring of medical conditions such as pneumonia, diabetic retinopathy, and tuberculosis. Our platform is designed to deliver accurate insights and reliable medical data to support timely and informed decision-making.

        </p>
        <p>
          We are committed to revolutionizing healthcare delivery by combining modern medical practices with innovative technology, ensuring that quality care is accessible to everyone.
        </p>
      </div>

      {/* Team Section */}
      <div className="about-images">
        <div className="team-member">
          <img src={img1} alt="Team Member 1" className="about-img" />
          <h3>Kaushiki Ghosh</h3>
          <p>2205988@kiit.ac.in</p>
        </div>

        <div className="team-member">
          <img src={img2} alt="Team Member 2" className="about-img" />
          <h3>Ritika Banerjee</h3>
          <p>22051007@kiit.ac.in</p>
        </div>

        <div className="team-member">
          <img src={img3} alt="Team Member 3" className="about-img" />
          <h3>Ritaja Tarafder</h3>
          <p>22051004@kiit.ac.in</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;