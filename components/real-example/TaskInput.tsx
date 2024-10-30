import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface TaskInputProps {
  addTaskToList: (newTaskText: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTaskToList }) => {
  const [taskInputValue, setTaskInputValue] = useState<string>("");

  const handleAddTaskPress = () => {
    if (taskInputValue) {
      addTaskToList(taskInputValue);
      setTaskInputValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        placeholderTextColor="black"
        value={taskInputValue}
        onChangeText={(newText) => setTaskInputValue(newText)}
      />
      <Button title="Add task" onPress={handleAddTaskPress} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
  },
});
