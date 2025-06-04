// components/ExerciseCard.jsx
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <div
      onClick={() => window.open(exercise.link, "_blank")}
      className="flex bg-[var(--color-gradient)] items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded  "
    >
      <img
        src={exercise.img}
        alt={exercise.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <p className="font-semibold">{exercise.name}</p>
        <p className="text-sm text-gray-500">{exercise.duration}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
