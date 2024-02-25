import React from 'react';
import './skills.css';

export default function Skills() {
  return (
    <div className='skills'>
      <h3 className='heading'>Skills</h3>
      <ul className='skill-list'>
        <li>
          <span className='skill-name'>Extensive knowledge of security protocols, procedures, and emergency response techniques.</span>
          <div className='skill-bar'></div>
        </li>
        <li>
          <span className='skill-name'>Proficient in operating surveillance systems, CCTV cameras, and alarm systems.</span>
          <div className='skill-bar'></div>
        </li>
        <li>
          <span className='skill-name'>Excellent observational and problem-solving skills, with the ability to quickly assess and respond to
potential security threats</span>
          <div className='skill-bar'></div>
        </li>
        <li>
          <span className='skill-name'>Strong communication and interpersonal skills, enabling effective interaction with individuals from
diverse backgrounds</span>
          <div className='skill-bar'></div>
        </li>
        <li>
          <span className='skill-name'>Ability to remain calm and composed in high-pressure situations, demonstrating professionalism at all
times.
</span>
          <div className='skill-bar'></div>
        </li>
        <li>
          <span className='skill-name'>Detail-oriented and organized, with a strong focus on maintaining accurate records and documentation.
</span>
          <div className='skill-bar'></div>
        </li>
      </ul>
    </div>
  );
}
