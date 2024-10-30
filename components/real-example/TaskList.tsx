import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Task } from "@/app";
import TaskItem from "@/components/real-example/TaskItem";
import CheckTaskModal from "@/components/real-example/CheckTaskModal";

interface TaskListProps {
  tasks: Task[];
  completeTaskWithId: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, completeTaskWithId }) => {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const handleTaskPress = (pressedTask: Task) => {
    setSelectedTask(pressedTask);
  };

  const handleCloseModal = () => {
    setSelectedTask(undefined);
  };

  return (
    <>
      <FlatList
        data={tasks}
        renderItem={(task) => (
          <Pressable onPress={() => handleTaskPress(task.item)}>
            <TaskItem id={task.item.id} text={task.item.text} />
          </Pressable>
        )}
        contentContainerStyle={{
          gap: 16,
        }}
      />
      <CheckTaskModal
        isVisible={!!selectedTask}
        task={selectedTask}
        closeModal={handleCloseModal}
        completeTaskWithId={completeTaskWithId}
      />
    </>
  );
};

export default TaskList;
