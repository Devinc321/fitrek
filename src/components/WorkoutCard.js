import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WorkoutCard = ({ exercise }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: exercise.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.setsReps}>
          Sets: {exercise.sets} Reps: {exercise.reps}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  setsReps: {
    fontSize: 16,
    color: '#555',
  },
});

export default WorkoutCard;
