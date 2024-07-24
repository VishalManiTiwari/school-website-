import React, { useContext } from 'react';
import myContext from './context/myContext';

const AboutUs = () => {
  const { mode } = useContext(myContext);

  return (
    <div className={`container relative top-[7rem] xl:top-[6rem] mx-auto p-6 min-h-screen ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h2 className={`text-4xl font-extrabold mb-6 border-b-4 pb-2 text-center ${mode === 'dark' ? 'border-gray-500' : 'border-gray-600'}`}>
        About Us
      </h2>
      <p className={`text-lg mb-8 text-center ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section className={`p-6 rounded-lg shadow-md ${mode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className={`text-3xl font-semibold mb-4 border-b-2 pb-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
            Vision
          </h3>
          <p className="text-lg">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>
        
        <section className={`p-6 rounded-lg shadow-md ${mode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className={`text-3xl font-semibold mb-4 border-b-2 pb-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
            Mission
          </h3>
          <p className="text-lg">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>
        
        <section className={`p-6 rounded-lg shadow-md ${mode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className={`text-3xl font-semibold mb-4 border-b-2 pb-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
            Principal's Message
          </h3>
          <p className="text-lg">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>
        
        <section className={`p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-3 ${mode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className={`text-3xl font-semibold mb-4 border-b-2 pb-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
            Infrastructure and Facilities
          </h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
