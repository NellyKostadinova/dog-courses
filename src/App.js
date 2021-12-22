import { useState } from 'react';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import course from './data/sexier-than-a-squirrel.json';
import './App.css';

function App() {
  const [lesson, setLesson] = useState(course.lessons[0]);

  function getSidebarLinks() {
    const sidebarLinks = course.lessons.map(lesson => {
      return {
        id: lesson.id,
        title: lesson.title
      }
    });

    return sidebarLinks;
  }

  function handleLessonChange(id) {
    const _lesson = course.lessons.find(lesson => lesson.id === id);
    setLesson(_lesson);
  }

  return (
    <div className="App">
      <Sidebar linklist={getSidebarLinks()} currentLesson={lesson.id} courseName="Sexier Than a Squirrel" linkClick={handleLessonChange} />
      <div className='lesson'>
        <h1>{lesson.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: lesson.body }}></div>
        {
          lesson.videos.map(link => {
            return <Video link={link} key={link} />
          })
        }
      </div>
    </div>
  );
}

export default App;