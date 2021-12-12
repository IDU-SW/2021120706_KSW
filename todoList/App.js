/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import TodoList from './components/TodoList';
import { Button, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TodoInsert from './components/TodoInsert';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator(); 

const HomeScene = ({navigation}) => {
  // todos: {id: Number, textValue: string, checked: boolean }
  //첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.appTitle}>TodoList</Text>
    <View style={styles.card}>
      <TodoInsert onAddTodo={addTodo} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </View>
    <Button
      title="Back"
      color="#FFFFFF"
      backgroundColor = "#007AFF"
      onPress={ () => navigation.pop(1)}
    />
  </SafeAreaView>
);
}

const WelcomScene = ({navigation}) => {
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.welcomeCard}>
    <Text style={styles.welcomTitle}>Welcome</Text>

      <Image
      source={require("./resources/image/profile.jpeg")}
      style={styles.image}
      />

    <Button
      style={styles.button}
      title="시작하기"
      onPress={ () => navigation.navigate('Home')}/>

    </View>
  </SafeAreaView>
  )
};

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen 
            name="Welcome"
            component={WelcomScene}
            // options={{ title: 'My home' }}
            options={{header: () => null}}
          /> 
          <Stack.Screen 
            name="Home"
            component={HomeScene}
            // options={{ title: 'My home' }}
            options={{header: () => null}}
          /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'left',
    marginLeft: 20,
    backgroundColor: '#007AFF',
  },
  //#3143e8
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 60,
    width: 300,
    backgroundColor: "#007AFF",
    // alignItems: "center",
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#007AFF",
    alignItems: 'center',
  },
  welcomeCard: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 100,
    marginTop: 100,
    alignItems: 'center',
  },
  welcomTitle: {
    color: '#000',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'left',
    alignItems: 'center',
  }
});

export default App;