import { useEffect, useState } from 'react';
import Video from './Video';
import Sidebar from './Sidebar';
// import course from './data/sexier-than-a-squirrel.json';
// import './App.scss';

function Course({ course }) {
  const [lesson, setLesson] = useState(course.lessons[0]);

  useEffect(() => {
    setLesson(course.lessons[0]);
  }, [course]);

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
    <>
      <Sidebar linklist={getSidebarLinks()} currentLesson={lesson.id} linkClick={handleLessonChange} />
      <div className='lesson'>
        <h2>{lesson.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: lesson.body }}></div>
        {
          lesson.videos
            ? lesson.videos.map(link => {
              return <Video link={link} key={link} />
            })
            : ''
        }
        {
          lesson.images
            ? lesson.images.map(img => {
              return <img src={img} alt="course-img" key={img} />
            })
            : ''
        }
      </div>
    </>
  );
}

export default Course;