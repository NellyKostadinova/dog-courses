import React from 'react';
import COURSES from '../data/courses.json';
import './Header.scss';

export default function Header({ handleClick }) {
  return (
    <header>
      <nav>
        <div className='logo' onClick={() => { handleClick('') }}>КУРСОВЕ</div>
        <ul>
          {
            COURSES.map(course => {
              return <li onClick={() => { handleClick(course.id) }}>{course.title}</li>
            })
          }
        </ul>
      </nav>
    </header>
  )
}