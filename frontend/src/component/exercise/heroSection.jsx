// components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import workOut from "../../assets/exersiceImgs/workOut.svg";
import Button from "../button2";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative lg:w-1/2 rounded-xl overflow-hidden">
      <img
        src={workOut}
        alt="Workout Motivation"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 bg-opacity-60 text-white p-6">
        <p className="mb-3">
          Worry about falling out of shape? Follow this workout to get curves
          and stay in shape
        </p>
        {/* <button
          onClick={() => navigate("/workout")}
          className="bg-[var(--color-tertiary)] text-white py-2 px-4 rounded w-full cursor-pointer"
        >
        </button> */}
        <Button
          href="/"
          className="w-full block text-center font-semibold hover:ring-white hover:text-white"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
