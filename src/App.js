import { useState } from 'react';
import STAS from './data/sexier-than-a-squirrel.json';
import TOTS from './data/taming-of-the-shrew.json';
import GBE from './data/good-bad-evil.json';
import BASICS from './data/basics.json';
import './App.scss';
import Course from './components/Course';
import CoursesGrid from './components/CoursesGrid';
import Header from './components/Header';

const getCourse = (id) => {
  switch (id) {
    case 'gbe':
      return GBE;
    case 'stas':
      return STAS;
    case 'tots':
      return TOTS;
    case 'basics':
      return BASICS;
    default:
      return undefined;
  }
}

function App() {
  const [course, setCourse] = useState(getCourse(undefined));


  function handleCourseChange(id) {
    const _course = getCourse(id);
    setCourse(_course);
  }

  return (
    <>
      <Header handleClick={handleCourseChange} />
      <div className="App">
        {
          course
            ? <Course course={course} />
            : <CoursesGrid handleClick={handleCourseChange} />
        }
      </div>
    </>
  );
}

export default App;