import { useState } from "react";
import "../experience/experience.css";


export default function Experience() {

  const [selectedExperience, setSelectedExperience ]= useState('wes')

  const handleButtonClick=(experience)=>{
    setSelectedExperience(experience);
  }
  



  return (
    <div className="experience">
        <h1 className="experienceHeading">EXPERIENCES</h1>

        <div className="buttons">
          <button className="buttonwes" onClick={()=>handleButtonClick('wes')} >West egg security</button>
          <button className="buttonvp" onClick={()=>handleButtonClick('vp')}>Vp protection</button>
          <button className="buttonnations" onClick={()=>handleButtonClick('nations')}>Nations fresh foods</button>
          </div>


      {selectedExperience === 'wes' && (
      <div className="wes">
        <img className="wesimage" src="./images/wes.jpg" alt="" />
        <div className="westext">
        <h4 className="wesheading">
          West Egg Security - Event Site Supervisor
        </h4>
        <span className="wesduration">From   August 2023 - Current </span><br/>
        <span className="weslocation"> Location - Exhibition Place (Toronto)</span>
        <p className="wesduties">
          - Oversee and manage security personnel, ensuring efficient deployment
          and adherence to company policies and procedures.<br /><br />
           - Conduct regular inspections and audits to maintain high standards of security and
          safety protocols. <br /><br />
          - Collaborate with the management team to develop
          and implement training programs for security guards, enhancing their
          skills and preparedness. <br /><br />
          - Coordinate with clients to understand their
          security needs and provide customized security solutions.<br /><br />
          - Handle escalated security incidents and emergencies, ensuring a swift and
          appropriate response. <br /><br />- Maintain detailed records and documentation,
          including incident reports and personnel records
        </p>
        </div>
      </div>
      )}



{selectedExperience === 'vp' && (
      <div className="vp">
        <img className="wesimage" src="./images/vp.jpg" alt="" />
        <div className="westext">
        <h4 className="wesheading">Vp Protection</h4>
        <span className="wesduration">Nov 2023 - Present</span><br/>
        <span className="weslocation"> Location - 1980 Saint Clair </span>
        <p className="wesduties">- Oversee and manage security personnel, ensuring efficient deployment
          and adherence to company policies and procedures.<br /><br />
           - Conduct regular inspections and audits to maintain high standards of security and
          safety protocols. <br /><br />
          - Collaborate with the management team to develop
          and implement training programs for security guards, enhancing their
          skills and preparedness. <br /><br />
          - Coordinate with clients to understand their
          security needs and provide customized security solutions.<br /><br />
          - Handle escalated security incidents and emergencies, ensuring a swift and
          appropriate response. <br /><br />- Maintain detailed records and documentation,
          including incident reports and personnel records</p>
        </div>
      </div>
      )}

{selectedExperience === 'nations' && (
      <div className="nations">
        <img className="wesimage" src="./images/nations.jpg" alt="" />
        <div className="westext">
        <h4 className="wesheading">Nations Fresh Foods</h4>
        <span className="wesduration">Jan 2023 - Nov 2023</span><br />
        <span className="weslocation"> Location - 700 Lawerence Allen Center </span>
        <p className="wesduties">- Oversee and manage security personnel, ensuring efficient deployment
          and adherence to company policies and procedures.<br /><br />
           - Conduct regular inspections and audits to maintain high standards of security and
          safety protocols. <br /><br />
          - Collaborate with the management team to develop
          and implement training programs for security guards, enhancing their
          skills and preparedness. <br /><br />
          - Coordinate with clients to understand their
          security needs and provide customized security solutions.<br /><br />
          - Handle escalated security incidents and emergencies, ensuring a swift and
          appropriate response. <br /><br />- Maintain detailed records and documentation,
          including incident reports and personnel records</p>
        </div>
      </div>
)}
    </div>
  );
}
