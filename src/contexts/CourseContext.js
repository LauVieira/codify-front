import React, { createContext, useState } from 'react';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
  const [courseData, setCourseData] = useState(null);
  const [activities, setActivities] = useState(null);
  const [topic, setTopic] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [program, setProgram] = useState(null);
  const [activityIndex, setActivityIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

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
      activityIndex,
      setActivityIndex,
      isChecked,
      setIsChecked,
    }}
    >
      {children}
    </CourseContext.Provider>
  );
}
