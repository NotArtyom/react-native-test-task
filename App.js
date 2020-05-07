//React Native
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store/reducers/rootReducer';
import thunk from 'redux-thunk';

//Routes imports
import Hello from './src/routes/Hello';
import Auth from './src/routes/Auth';
import Subject from './src/routes/Subject';

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App () {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hello" screenOptions={ {headerShown: false} }>
          <Stack.Screen name="Hello" component={ Hello }/>
          <Stack.Screen name="Auth" component={ Auth } options={ {
            gestureEnabled: false,
          } }/>
          {/*<Stack.Screen name="Subject" component={ Subject } options={ {gestureEnabled: false} }/>*/}
          <Stack.Screen name="Subject" component={ Subject }/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
