import React, { useState } from 'react';
import { MapPin, Phone, Bookmark, Star, X } from 'react-feather';
import Avvvatars from 'avvvatars-react';

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={16}
        fill={star <= rating ? '#FFA500' : 'none'}
        stroke={star <= rating ? '#FFA500' : '#CBD5E0'}
      />
    ))}
    <span className="ml-2 text-gray-600 font-semibold">{rating.toFixed(1)}</span>
  </div>
);

const TestimonialCard = ({ author, content, rating }) => (
  <div className="bg-orange-50 p-4 rounded-lg mb-4">
    <p className="text-gray-700 mb-2">"{content}"</p>
    <div className="flex justify-between items-center">
      <span className="font-semibold text-orange-800">{author}</span>
      <StarRating rating={rating} />
    </div>
  </div>
);

const CallPopup = ({ phoneNumber, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <p className="mb-4">You can reach this skiller at:</p>
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-blue-600 hover:text-blue-800">
          {phoneNumber}
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Click the number to call directly, or copy it to your clipboard.
      </p>
    </div>
  </div>
);

const SkillerProfile = ({ name, initials, location, skills, description, availability, rating, testimonials }) => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const phoneNumber = "+64 27 307 8323"; // Replace with your actual phone number

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Avvvatars value={initials} style="character" size={64} />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
            <StarRating rating={rating} />
          </div>
        </div>
        <div className="flex items-center">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center mr-2"
            onClick={() => setShowCallPopup(true)}
          >
            <Phone size={16} className="mr-2" />
            Call this skiller
          </button>
          <button className="text-gray-600 p-2">
            <Bookmark size={20} />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div className="w-3/4">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2">{skills[0]}</h3>
          <p className="text-gray-700 mb-6">{description}</p>
          <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            {availability}
          </span>
        </div>
      </div>
      {showCallPopup && (
        <CallPopup 
          phoneNumber={phoneNumber} 
          onClose={() => setShowCallPopup(false)} 
        />
      )}
    </div>
  );
};

export default SkillerProfile;