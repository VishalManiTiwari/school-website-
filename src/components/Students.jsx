
import React, { useContext } from 'react';
import myContext from './context/myContext';

const Students = () => {
  const { mode } = useContext(myContext);

  return (
    <div
      className={`container relative top-[7rem] mx-auto p-6 min-h-screen ${
        mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-gray-600 pb-2 text-center">
        Students
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section
          className={`p-6 rounded-lg shadow-md ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
            Life at Springdale
          </h3>
          <img
            src="https://imgs.search.brave.com/tP7O2XIKHXRtyvUS1L0Ez2Jlb--LQ_vnf4OKjc5jaC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29ubmVjdGlvbnNh/Y2FkZW15LmNvbS9j/b250ZW50L2RhbS9w/dnMvY2EvcmVzb3Vy/Y2UtaHViL2ltYWdl/cy9SSC1JbWFnZS01/LUNvbW1vbi1FeHRy/YWN1cnJpY3VsYXIt/QWN0aXZpdGllcy5q/cGc"
            alt="Extracurricular Activities"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-lg">
            Extracurricular Activities: Music, Dance, Drama, Art, Sports,
            Robotics, Debate Club, Science Club
          </p>
        </section>

        <section
          className={`p-6 rounded-lg shadow-md ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
            Clubs and Societies
          </h3>
          <img
            src="https://imgs.search.brave.com/mqYaAqVv61e8SHeG-J9emrLGcmT4VBB-UysGVas3-EU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cm1pdC5lZHUuYXUv/Y29udGVudC9kYW0v/cm1pdC9hdS9lbi9z/dHVkZW50cy9pbWFn/ZXMvc3R1ZGVudC1s/aWZlL2NsdWJzLXNv/Y2lldGllcy9yZXNv/dXJjZXMvaW1hZ2Vz/L2NsdWJzX3Jlc291/cmNlc18xMjIweDcz/Mi5qcGc"
            alt="Clubs and Societies"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-lg">
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </section>

        <section
          className={`p-6 rounded-lg shadow-md ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
            Achievements
          </h3>
          <img
            src="https://imgs.search.brave.com/sC_ZGdYV1kOjIHuKSKV9y4-3Ek9oC0FukM9YCBzhDfs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mdXR1/cmVlZHVjYXRpb25t/YWdhemluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvMS4yLUFjYWRl/bWljLUF3YXJkcy1h/bmQtSG9ub3Vycy5q/cGc"
            alt="Achievements"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </section>

        <section
          className={`p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-3 ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
            Student Council
          </h3>
          <img
            src="https://www.aggs.school.nz/images/2020/Student_Council_5.jpg" 
            alt="Student Council"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>President: Amy Parker, Grade 12</li>
            <li>Vice President: Rajiv Mehta, Grade 11</li>
            <li>Secretary: Lisa Wong, Grade 10</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Students;



