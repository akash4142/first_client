import { useState } from "react";
import "../experience/experience.css";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState("wes");

  const handleButtonClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="experience">
      <h1 className="experienceHeading">EXPERIENCES</h1>

      <div className="buttons">
        <button className="buttonwes" onClick={() => handleButtonClick("wes")}>
          West egg security
        </button>
        <button className="buttonvp" onClick={() => handleButtonClick("vp")}>
          Vp protection
        </button>
        <button
          className="buttonnations"
          onClick={() => handleButtonClick("nations")}
        >
          Nations fresh foods
        </button>
      </div>

      {selectedExperience === "wes" && (
        <div className="wes">
          <img className="wesimage" src="./images/wes.jpg" alt="" />
          <div className="westext">
            <h4 className="wesheading">
              West Egg Security - Event Site Supervisor
            </h4>
            <span className="wesduration">From August 2023 - Current </span>
            <br />
            <span className="weslocation">
              {" "}
              Location - Exhibition Place (Toronto)
            </span>
            <p className="wesduties">
              - Oversee and manage security personnel, ensuring efficient
              deployment and adherence to company policies and procedures.
              <br />
              <br />
              - Conduct regular inspections and audits to maintain high
              standards of security and safety protocols. <br />
              <br />
              - Collaborate with the management team to develop and implement
              training programs for security guards, enhancing their skills and
              preparedness. <br />
              <br />
              - Coordinate with clients to understand their security needs and
              provide customized security solutions.
              <br />
              <br />
              - Handle escalated security incidents and emergencies, ensuring a
              swift and appropriate response. <br />
              <br />- Maintain detailed records and documentation, including
              incident reports and personnel records
            </p>
          </div>
        </div>
      )}

      {selectedExperience === "vp" && (
        <div className="vp">
          <img className="wesimage" src="./images/vp.jpg" alt="" />
          <div className="westext">
            <h4 className="wesheading">Vp Protection</h4>
            <span className="wesduration">Nov 2023 - Present</span>
            <br />
            <span className="weslocation"> Location - 1980 Saint Clair </span>
            <p className="wesduties">
              - Supervise and lead security personnel, ensuring their effective
              deployment while maintaining strict adherence to company policies
              and procedures. Implement and monitor CCTV camera systems for
              enhanced surveillance.
              <br />
              <br />
              - Conduct regular inspections and audits to uphold elevated
              standards of security and safety protocols, including the
              efficient functioning of CCTV cameras.
              <br />
              <br />
              - Collaborate with the management team to formulate and execute
              training programs for security guards, enhancing their skills and
              readiness, especially in handling situations involving homeless
              individuals.
              <br />
              <br />
              - Coordinate with clients to comprehend their specific security
              requirements, including addressing issues related to homeless
              individuals, and provide tailored security solutions.
              <br />
              <br />
              - Manage escalated security incidents and emergencies, ensuring a
              prompt and appropriate response, particularly when dealing with
              homeless individuals.
              <br />
              <br />- Maintain comprehensive records and documentation,
              including incident reports, personnel records, and specific
              details related to interactions with homeless individuals.
            </p>
          </div>
        </div>
      )}

      {selectedExperience === "nations" && (
        <div className="nations">
          <img className="wesimage" src="./images/nations.jpg" alt="" />
          <div className="westext">
            <h4 className="wesheading">Nations Fresh Foods</h4>
            <span className="wesduration">Jan 2023 - Nov 2023</span>
            <br />
            <span className="weslocation">
              {" "}
              Location - 700 Lawerence Allen Center{" "}
            </span>
            <p className="wesduties">
              - Supervise and lead loss prevention personnel, ensuring their
              effective deployment and compliance with company policies.
              <br />
              <br />
              - Perform regular inspections and audits to uphold high standards
              of safety protocols and loss prevention measures. <br />
              <br />
              - Collaborate with the management team to create and implement
              training programs for loss prevention officers, enhancing their
              skills and readiness.
              <br />
              <br />
              - Coordinate with clients and internal stakeholders to understand
              specific loss prevention needs and deliver tailored security
              solutions.
              <br />
              <br />
              - Manage escalated incidents related to loss prevention,
              emergencies, and theft, ensuring a prompt and appropriate
              response. <br />
              <br />- Maintain meticulous records and documentation, including
              incident reports and personnel records.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
