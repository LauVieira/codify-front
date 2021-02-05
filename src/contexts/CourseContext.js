import React, { createContext, useState } from 'react';

const CourseContext = createContext();

export default CourseContext;

export function CourseProvider({ children }) {
    const [courseData, setCourseData] = useState([]);

    return (
        <CourseContext.Provider value={{courseData, setCourseData}}>
            {children}
        </CourseContext.Provider>
    );
}
