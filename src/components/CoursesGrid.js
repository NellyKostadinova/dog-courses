import React from 'react';
import COURSES from '../data/courses.json';
import './CoursesGrid.scss';

export default function CoursesGrid({ handleClick }) {

  return (
    <div className="courses-grid">
      <ul>
        {COURSES.map(course => {
          return (
            <li onClick={() => { handleClick(course.id) }} key={course.id}>
              <div className='course-image'><img src={course.img} alt="course-img" /></div>
              <h4>{course.title}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}