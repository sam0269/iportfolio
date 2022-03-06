import React from 'react'
import {Title} from '../About/About';

const Resume = () => {
  return (
    <>
        <Title title1="Resume" title2="Achievement So Far" color1="#E87C17" color2="#E5BA21"/>
        <div className="resume-container" style={{padding: " 0 8rem ",marginTop:"5rem"}}>
          <div className="first-box">
            <div className="first-content-box">
              <h1 className='fs-4'>EDUCATION</h1>
              <h3 className='fs-1'>NIELIT</h3>
              <span className='fs-4'>DIPLOMA IN COMPUTER SCEINCE</span>
              <span className='fs-1'>JAN 22, Delhi</span>
            </div>
            <div className="second-content-box">
              <h1 className='fs-4' >SKILLS</h1>
              <h3 className='fs-1'>Technical Skills</h3>
              <span className='fs-4'>Over 5000 lines</span>
              <ul className='fs-4'>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
              </ul>
              <span className='fs-1'>Familiar:</span>
              <ul className='fs-4'>
                <li>API</li>
                <li>Hyper</li>
                <li>Bootstrap 5</li>
                <li>NPM</li>
              </ul>
            </div>
          </div>
          <div className="second-box">
            <div className="box_1 box">
            <h1 className='fs-4'>EXPERIENCE</h1>
            <h3>PEPCODING | Front End Web Devloper Intern</h3>
            <span className='fs-4'>AUG 2012-FEB 2022 | NEW DELHI, IN</span>
            <ul className='fs-4'>
                <li>100 out of 500 applicants chosen to be a NADOS Fellow 2021.</li>
                <li>Led and shipped NADOS - the educational platform for the student with skills and without degree. </li>
                <li>Front-end developer - Wrote and reviewed code for UI using technical skils such as ReactJS, Material UI, Antd and JS</li>
              </ul>
            </div>
            <div className="box_2 box">
              
            </div>
            <div className="box_3 box">div3</div>
            <div className="box_4 box">div4</div>
          </div>
        </div>
    </>
  )
}

export default Resume