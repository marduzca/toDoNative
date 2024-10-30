import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import TaskInput from "@/components/real-example/TaskInput";
import { useState } from "react";
import TaskList from "@/components/real-example/TaskList";

export interface Task {
  id: string;
  text: string;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTaskToList = (newTaskText: string) => {
    setTasks((currentTaskList) => [
      ...currentTaskList,
      { id: Math.random().toString(), text: newTaskText },
    ]);
  };

  const handleCompleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput addTaskToList={handleAddTaskToList} />
      <TaskList tasks={tasks} completeTaskWithId={handleCompleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: "#25292e",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
