import React, { useContext } from "react";
import myContext from "./context/myContext";


const facultyData = [
  {
    name: 'John Doe',
    title: 'Principal',
    imgSrc: 'https://dpi.wi.gov/sites/default/files/imce/social-studies/teacheraamale.jpg',
    description: 'M.Ed, 20 years of experience in educational administration.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    imgSrc: 'https://thumbs.dreamstime.com/b/happy-male-teacher-pen-binder-sitting-portrait-mature-desk-classroom-36510111.jpg',
    description: 'M.Sc. in Physics, 15 years of teaching experience.',
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.Oewl_MRPuG9b7_lwLfMhawHaFB&pid=Api&P=0&h=180',
    description: 'M.A. in English, 10 years of teaching experience.',
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    imgSrc: 'https://cdn.pixabay.com/photo/2016/03/02/10/32/allrounder-1232059_1280.jpg',
    description: 'M.Sc. in Mathematics, 8 years of teaching experience.',
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    imgSrc: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_640.jpg',
    description: 'M.Sc. in Chemistry, 12 years of teaching experience.',
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    imgSrc: 'https://media.istockphoto.com/id/1223044329/photo/confident-man-teacher-wearing-headset-speaking-holding-online-lesson.jpg?s=612x612&w=0&k=20&c=xKYLqKd6obXrUazZg5PDCycrwPiFXHVEJzqi0lxh78Q=', 
    description: 'B.Tech in Computer Science, 5 years of teaching experience.',
  },
];



const Faculty = () => {

  const context = useContext(myContext)
  const {mode} = context

  return (
    <div  className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Faculty</h1>
      <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.map((faculty) => (
          <div 
          style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
          key={faculty.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={faculty.imgSrc}
              alt={faculty.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{faculty.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{faculty.title}</p>
              <p className="text-gray-800">{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
