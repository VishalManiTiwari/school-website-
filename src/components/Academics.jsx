import React, { useContext } from 'react';
import myContext from './context/myContext';

const Academics = () => {

  const context = useContext(myContext)
  const {mode} = context
  return (
    <div
    style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '' }}

    className="bg-white shadow-md rounded-lg p-6">
    <h2 
    style={{color: mode === 'dark' ? 'white' : '', }}
    
    className="text-4xl font-bold text-gray-800 mb-6">Academics</h2>

      <div style={{ color: mode === 'dark' ? 'white' : '', }} className="mb-6">
        <h3
        style={{ color: mode === 'dark' ? 'white' : '', }}
        className="text-3xl font-semibold text-gray-700 mb-4">Curriculum</h3>
        <ul
         style={{ color: mode === 'dark' ? 'white' : '', }}
         className="list-disc list-inside text-gray-600 space-y-2">
          <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
          <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
          <li>Senior Secondary (Grades 11-12): Science Stream (Physics, Chemistry, Biology, Mathematics, Computer Science, English), Commerce Stream (Accountancy, Business Studies, Economics, Mathematics, English)</li>
        </ul>
      </div>

      <div  className="mb-6">
        <h3
         style={{ color: mode === 'dark' ? 'white' : '', }}
        className="text-3xl font-semibold text-gray-700 mb-4">Teaching Methodologies</h3>
        <p 
        style={{ color: mode === 'dark' ? 'white' : '', }}
        className="text-gray-600">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
      </div>

      <div>
        <h3 
         style={{ color: mode === 'dark' ? 'white' : '', }}
        className="text-3xl font-semibold text-gray-700 mb-4">Educational Resources</h3>
        <p 
         style={{ color: mode === 'dark' ? 'white' : '', }}
        className="text-gray-600">
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </div>
    </div>
  );
}

export default Academics;
