import React from 'react';
import { View, ScrollView } from 'react-native';
import WorkoutCard from './WorkoutCard';

const WorkoutApp = () => {
  const workouts = [
    { name: 'Push-ups', sets: 3, reps: 15, imageUrl: 'https://example.com/pushups.jpg' },
    // Add more workout data as needed
  ];

  return (
    <ScrollView>
      {workouts.map((exercise, index) => (
        <WorkoutCard key={index} exercise={exercise} />
      ))}
    </ScrollView>
  );
};

export default WorkoutApp;
