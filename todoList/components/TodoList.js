// components/TodoList.js
import React from "react";
import {StyleSheet, ScrollView, Text} from 'react-native';

import TodoListCell from "./TodoListCell";

const TodoList = () => {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        <TodoListCell />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    listContainer: {
      
    },
  });
  
  export default TodoList;