// pages/WorkoutPage.jsx
import React from 'react';
import HeroSection from '../component/exercise/heroSection';

import ExerciseCard from '../component/exercise/exerciseCard';

import jumpingJacks from "../assets/exersiceImgs/jumpingJack.svg"
import squat from "../assets/exersiceImgs/squat.svg"
import wallPush from "../assets/exersiceImgs/wallPush.svg"
import RussianTwist from "../assets/exersiceImgs/RussianTwist.svg"
import backWardLunge from "../assets/exersiceImgs/backwardLunge.svg"
import { ArrowLeftIcon } from 'lucide-react';
import {Link} from "react-router-dom"
const exercises = [
  {
    name: 'Jumping Jacks',
    duration: '00:30',
    img: jumpingJacks,
    link: 'https://www.youtube.com/watch?v=c4DAnQ6DtF8',
  },
  {
    name: 'Squat Pulses',
    duration: '00:30',
    img: squat,
    link: 'https://www.youtube.com/watch?v=aclHkVaku9U',
  },
  {
    name: 'Wall Push-Ups',
    duration: '00:30',
    img: wallPush,
    link: 'https://www.youtube.com/watch?v=Eh00_rniF8E',
  },
  {
    name: 'Russian Twist',
    duration: '00:30',
    img: RussianTwist,
    link: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
  },
  {
    name: 'Backward Lunge',
    duration: '00:30',
    img: backWardLunge,
    link: 'https://www.youtube.com/watch?v=wrwwXE_x-pQ',
  },
];

const WorkoutPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 max-w-6xl mx-auto border rounded-xl ">

      <p className='text-center'>
        Exercise
      </p>
      <Link to="/">
         <ArrowLeftIcon/>
      </Link>
     
      
      <div className="overflow-hidden flex flex-col lg:flex-row gap-6">
        
    
        <HeroSection />
        <div className="flex-1 p-4 space-y-4" id="exercise-list">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.name} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
