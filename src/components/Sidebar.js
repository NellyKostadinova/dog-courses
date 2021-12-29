import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './Sidebar.scss';

export default function Sidebar({ linklist, currentLesson, linkClick, courseName }) {
  const { width } = useWindowDimensions();

  return (
    <div className="sidebar">
      {
        (width > 768)
          ? <ul>
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
          : <select onChange={(event) => { linkClick(event.target.value) }}>
            {linklist.map(link => {
              return (
                <option key={link.id} value={link.id}>
                  {link.title}
                </option>
              );
            })}
          </select>
      }

    </div>
  )
}