import React from "react";
// import DoctorCard from "./DoctorCard";
// import profile1 from "../Assets/profile-1.png";
// import profile2 from "../Assets/profile-2.png";
// import profile3 from "../Assets/profile-3.png";
// import profile4 from "../Assets/profile-4.png";
import ai  from "../Database/background.png";
import card from "../Database/sample.png"
import "./Doctor.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Sanjivan Card</span>
        </h3>

        <p className="dt-description">
        The Sanjivan Card features a unique QR code assigned to each user, facilitating personalized identification and access. Embedded within the QR code are essential user details and medical history, ensuring efficient retrieval and utilization of healthcare information.
        </p>
<br></br><br></br>
        <div>
          <img src={card} style={{"height":"400px" , "width":"600px" , "border":"3px solid black"}}/>
        </div>
      </div>
      <div className="dt-cards-content">
    
      </div>

      {/* <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        />
      </div>*/}
    </div> 
    
  );
}

export default Doctors;