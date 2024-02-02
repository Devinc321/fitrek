import React from 'react';
import { ScrollView } from 'react-native';
import WorkoutCard from './src/components/WorkoutCard';

const App = () => {
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

export default App;
