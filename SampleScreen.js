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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var data = [
  { id: 1, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 2, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 3, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 4, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 5, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 6, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 7, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 8, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 9, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 10, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 11, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 12, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
];

var render_USERLIST = ({ item }) => {
  return (
    <>
      <View
        style={{
          height: 75,
          width: "100%",
          backgroundColor: "#3EA9FA",
          borderWidth: 1,
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ width: 75, height: "100%", padding: 10 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "ccc",
              borderRadius: 100,
              borderWidth: 1,
            }}
          ></TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.user_name}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 15 }}>USER_PROFILE_TEXT</Text>
          </View>
        </View>
      </View>
    </>
  );
};

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <View style={{ height: 100, width: "100%", backgroundColor: "#ccc" }}>
//         {/* Sample Title */}
//       </View>
//       <ScrollView style={{ height: "100%" }}>
//         <FlatList
//           data={data}
//           renderItem={render_USERLIST}
//           keyExtractor={(item) => item.id}
//         />
//       </ScrollView>
//     </View>
//   );
// }

export function SampleScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sample Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
