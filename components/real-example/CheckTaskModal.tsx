import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import TaskItem from "@/components/real-example/TaskItem";
import { Task } from "@/app";

interface CheckTaskModalProps {
  isVisible: boolean;
  task?: Task;
  closeModal: () => void;
  completeTaskWithId: (id: string) => void;
}

const CheckTaskModal: React.FC<CheckTaskModalProps> = ({
  isVisible,
  task,
  closeModal,
  completeTaskWithId,
}) => {
  const handleCompleteButtonPress = () => {
    completeTaskWithId(task?.id || "");

    closeModal();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.text}>Did you complete this task?</Text>
        {task && <TaskItem id={task.id} text={task.text} />}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Complete" onPress={handleCompleteButtonPress} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => closeModal()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheckTaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  button: {
    width: 100,
  },
});
