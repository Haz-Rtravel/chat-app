import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SampleScreen } from "../AwesomeProject/SampleScreen";

import loadingScreen from "../AwesomeProject/screens/loading/loadingScreen"

import welcomeScreen from "../AwesomeProject/screens/welcomeScreen";

import friendlistScreen from "../AwesomeProject/screens/main/friendlistScreen"

import chatroomlistScreen from "../AwesomeProject/screens/main/chatroomlistScreen"
import chatroomScreen from "../AwesomeProject/screens/chatroom/chatroomScreen"

import settingScreen from "../AwesomeProject/screens/main/settingScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Welcome() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={welcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  )
}

function Friendlist() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="friendlistScreen" component={friendlistScreen} />
      </Stack.Navigator>
  )
}

function Chatroom() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="chatroomlistScreen" component={chatroomlistScreen} />
        
      </Stack.Navigator>
  )
}

function Setting() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="settingScreen" component={settingScreen} />
      </Stack.Navigator>
  )
}

function Home() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Friendlist" component={Friendlist} />
        <Tab.Screen name="Chatroom" component={Chatroom} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="loading" component={loadingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="chatroomScreen" component={chatroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//           <Tab.Screen name="Sample" component={SampleScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
