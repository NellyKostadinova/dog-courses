import React from 'react';
import './Sidebar.css';

export default function Sidebar({ linklist, courseId, courseName, currentLesson, linkClick }) {
  return (
    <div className="sidebar">
      <ul className="">
        {linklist.map(link => {
          return (
            <li key={link.id}>
              <button onClick={() => { linkClick(link.id) }} className={link.id === currentLesson ? 'active' : ''}>
                {link.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}