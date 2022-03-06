import React from 'react'
import {Title} from '../About/About';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  
  return (
      <>
        <Title title1="My Speciality" title2="MY SKILLS" color1="#E87C17" color2="#E5BA21"/>
        <div className = "progress_bar flex-1">
          <CircularProgressbar className='bar' value={80} text="HTML" 
          styles={buildStyles({
            rotation: 0,strokeLinecap: 'butt',
            textSize: '16px',pathTransitionDuration: 0.5,
            pathColor: `#E5BA21`,textColor: '#E87C17',backgroundColor: '#3e98c7'
          })}
          />
          <CircularProgressbar className='bar' value={70} text="CSS3" 
          styles={buildStyles({
            rotation: 0,strokeLinecap: 'butt',
            textSize: '16px',pathTransitionDuration: 0.5,
            pathColor: `#E87C17`,textColor: '#E5BA21',backgroundColor: '#3e98c7'
          })}
          />
          <CircularProgressbar className='bar' value={60} text="JavaScript" 
          styles={buildStyles({
            rotation: 0,strokeLinecap: 'butt',
            textSize: '16px',pathTransitionDuration: 0.5,
            pathColor: `#E5BA21`,textColor: '#E87C17',backgroundColor: '#3e98c7'
          })}
          />
          <CircularProgressbar className='bar' value={50} text="ReactJS" 
          styles={buildStyles({
            rotation: 0,strokeLinecap: 'butt',
            textSize: '16px',pathTransitionDuration: 0.5,
            pathColor: `#E87C17`,textColor: '#E5BA21',backgroundColor: '#3e98c7'
          })}
          />
          
        </div>
      </>
  )
}

export default Skills