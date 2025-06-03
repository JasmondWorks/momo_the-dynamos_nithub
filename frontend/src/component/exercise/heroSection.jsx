
// components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import workOut from "../../assets/exersiceImgs/workOut.svg"

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative lg:w-1/2">
      <img
        src={workOut}
        alt="Workout Motivation"
        className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
        <p className="mb-3">Worry about falling out of shape? Follow this workout to get curves and stay in shape</p>
        <button
          onClick={() => navigate('/workout')}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection