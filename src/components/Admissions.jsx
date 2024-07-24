import React, { useContext, useState } from 'react';
import myContext from './context/myContext';

const Admissions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is the age criteria for admission?',
      answer: 'Children must be at least 3 years old for nursery admission.',
      open: false,
    },
    {
      question: 'Are there any sibling discounts?',
      answer: 'Yes, there are discounts available for siblings. Please contact the admissions office for details.',
      open: false,
    },
    {
      question: 'What documents are required for admission?',
      answer: 'You need to submit the birth certificate, previous school records, and address proof.',
      open: false,
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  const context = useContext(myContext)
  const {mode} = context

  return (
    <div 
    style={{ backgroundColor: mode === 'dark' ? '#282c34' : '' }}
    className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 max-w-4xl mx-auto my-10">
      <h2
       style={{color: mode === 'dark' ? 'white' : ''}} 
      className="text-4xl font-bold text-gray-800 mb-8 text-center">Admissions</h2>

      <div className="mb-12">
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">Process</h3>
        <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-600 leading-relaxed">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
      </div>

      <div className="mb-12">
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">Criteria</h3>
        <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-600 leading-relaxed">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </div>

      <div className="mb-12">
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">Important Dates</h3>
        <ul style={{color: mode === 'dark' ? 'white' : ''}} className="list-disc list-inside text-gray-600 space-y-2">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>

      <div className="mb-12">
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">Download Forms</h3>
        <div className="space-y-4">
          <a href="/forms/admission-form.pdf" className="text-blue-600 hover:underline">Admission Form (PDF)</a>
          <a href="/forms/fee-structure.pdf" className="text-blue-600 hover:underline">Fee Structure (PDF)</a>
        </div>
      </div>

      <div  className="mb-12">
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">FAQ</h3>
        <div  className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h4 style={{color: mode === 'dark' ? 'white' : ''}} className="text-2xl font-semibold text-gray-700 cursor-pointer" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span style={{color: mode === 'dark' ? 'white' : ''}} className="ml-2 text-gray-500">{faq.open ? '-' : '+'}</span>
              </h4>
              {faq.open && <p  className="text-gray-600 leading-relaxed mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{color: mode === 'dark' ? 'white' : ''}} className="text-3xl font-semibold text-gray-700 mb-4">Contact Admissions</h3>
        <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-600 leading-relaxed">
          For any inquiries regarding admissions, please contact us at:
        </p>
        <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-600 mt-2">
          Phone: +1 (123) 456-7890
        </p>
        <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-600">
          Email: <a href="mailto:admissions@springdale.edu" className="text-blue-600 hover:underline">admissions@springdale.edu</a>
        </p>
      </div>
    </div>
  );
}

export default Admissions;
