import { View, Text, StyleSheet } from "react-native";
import React from "react";

const List = () => {
  return (
    <View style={styles.cointainer}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tareas del dia</Text>

        <View style={styles.items}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {},
  items: {},
  tasksWrapper: {},
});

export default List;
