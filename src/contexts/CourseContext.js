import React, { createContext, useState } from 'react';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [courseData, setCourseData] = useState([]);
  const [activities, setActivities] = useState('');
  const [topic, setTopic] = useState('');
  const [chapter, setChapter] = useState('');
  const [program, setProgram] = useState('');

  return (
    <CourseContext.Provider value={{
      courseData,
      setCourseData,
      activities,
      setActivities,
      topic,
      setTopic,
      chapter,
      setChapter,
      program,
      setProgram,
    }}
    >
      {children}
    </CourseContext.Provider>
  );
}
