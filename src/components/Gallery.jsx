import React, { useContext } from 'react';
import myContext from './context/myContext';

const Gallery = () => {
  const galleryItems = [
    {
      src: "https://img.freepik.com/premium-photo/kids-playing-tennis-playground-cartoon-illustration-school-story-book-ai-images_981829-6050.jpg?w=740",
      alt: "Sports Day",
      caption: "Students participating in various sports events."
    },
    {
      src: "https://img.freepik.com/free-photo/medium-shot-girl-looking-through-microscope_23-2148913655.jpg?w=900&t=st=1721837519~exp=1721838119~hmac=cbe739bc57d2c1d3e82e03affd07b3f2ea558aca09bcccd059f265143beabff4",
      alt: "Science Exhibition",
      caption: "Students presenting their science projects."
    },
    {
      src: "https://i.pinimg.com/originals/77/98/c6/7798c681eb8c7a92c7714e71f2fc2117.jpg",
      alt: "Cultural Fest",
      caption: "Students performing in the cultural fest."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Elementary_classroom_in_Alaska.jpg/1200px-Elementary_classroom_in_Alaska.jpg",
      alt: "Classroom",
      caption: "A glimpse of our interactive classrooms."
    },
    {
      src: "https://www.shutterstock.com/shutterstock/photos/2318928003/display_1500/stock-vector-an-interior-design-of-a-reading-room-in-a-public-library-an-empty-modern-school-or-university-2318928003.jpg",
      alt: "Library",
      caption: "Students reading and studying in the school library."
    }
  ];

  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className={`container relative top-[8rem] xl:top-[6rem] mx-auto p-4 ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className={`text-4xl font-bold mb-8 text-center ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className={`gallery-item shadow-lg rounded-lg overflow-hidden ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow`}>
            <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
