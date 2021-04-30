import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SampleScreen } from "../AwesomeProject/SampleScreen";
import welcomeScreen from "../AwesomeProject/screens/welcomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

var data = [
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
  { id: 1, chatroom_name: "Chatroom Name", latest_message: "This is Latest Message!", members: [1,2,3,4] },
]

var render_Chatroom_List = ({ item }) => {
  return (
    <>
      <TouchableOpacity
          style={{
            height: 65,
            width: "100%",
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <View style={{ width: 60, height: "100%", padding: 10 }}>
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: "#ccc",
                borderRadius: 10,
              }}
            ></View>
          </View>

          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              
              <View style={{ flex: 1, backgroundColor: '#ccc', justifyContent: 'center', paddingHorizontal: 5, borderRadius: 5}}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Chatroom Name
                </Text>
              </View>
              
            </View>

            <View
              style={{ flex: 1, justifyContent: "center"}}
            >
              <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 5}}>
                <Text style={{ fontSize: 12 }}>Latest Message</Text>
              </View>
              
            </View>
          </View>

          <View style={{width: 40, height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{borderRadius: 25, width: 30, height: 30, backgroundColor: '#ff0606', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: '600', color: '#FFF'}}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
    </>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ height: 100, width: "100%", backgroundColor: "#ccc" }}>
          {/* Sample Title */}
        </View>

        <ScrollView style={{ height: "100%" }}>
          <FlatList
            data={data}
            renderItem={render_Chatroom_List}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
        
      </View>
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
