import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TaskItemProps {
  id: string;
  text: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text }) => {
  return (
    <View key={id} style={styles.task}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#4c4d59",
    borderRadius: 8,
    padding: 8,
  },
  taskText: {
    color: "white",
  },
});
