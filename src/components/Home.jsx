import React, { useContext } from 'react';
import Academics from './Academics';
import Faculty from './Faculty';
import Admissions from './Admissions';
import myContext from './context/myContext';

const Home = () => {
  const { mode } = useContext(myContext);

  return (
    <div
      className={`container relative top-[6rem] mx-auto min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <header className={`py-6 rounded-md shadow-md mb-8 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
          Welcome to Springdale Public School
        </h1>
      </header>

      <section className="text-center mb-8">
        <p className="text-base sm:text-lg md:text-xl">
          Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </p>
      </section>

      <section className="relative mb-8">
        <div className="carousel relative overflow-hidden rounded-md shadow-md">
          <div className="carousel-inner flex transition-transform duration-700 ease-in-out">
            <div className="carousel-item min-w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg sm:text-xl md:text-2xl font-semibold py-4 sm:py-6 px-4">
              Annual Sports Day - Celebrating Excellence in Sports
            </div>
            <div className="carousel-item min-w-full flex justify-center items-center bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg sm:text-xl md:text-2xl font-semibold py-4 sm:py-6 px-4">
              Science Exhibition - Showcasing Student Innovations
            </div>
            <div className="carousel-item min-w-full flex justify-center items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg sm:text-xl md:text-2xl font-semibold py-4 sm:py-6 px-4">
              Cultural Fest - Embracing Diversity and Creativity
            </div>
          </div>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors">
            &#9664;
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors">
            &#9654;
          </button>
        </div>
      </section>

      <Academics />

      <Faculty />

      <Admissions />
    </div>
  );
}

export default Home;
