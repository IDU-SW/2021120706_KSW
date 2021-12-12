import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

Icon.loadFont();

const WelcomScene = () => {
    return (
    <SafeAreaView style={styles.container}>
        <Text>Welcome</Text>
    </SafeAreaView>
    )
};

const BtnHeadToTodos = (onDismiss) => {
    <Button>
        title="Get started"
        onPress={ () => navigation.navigate('Home')}
    </Button>
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
});

export default WelcomScene;