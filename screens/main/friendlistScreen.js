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

var data = [
  { id: 1, user_name: "User Name", user_profile_desc: "User Description" },
  { id: 2, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 3, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 4, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 5, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 6, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 7, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 8, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  { id: 9, user_name: "SAMPLE NAME", user_profile_desc: "SAMPLE PROFILE DESC" },
  {
    id: 10,
    user_name: "SAMPLE NAME",
    user_profile_desc: "SAMPLE PROFILE DESC",
  },
  {
    id: 11,
    user_name: "SAMPLE NAME",
    user_profile_desc: "SAMPLE PROFILE DESC",
  },
  {
    id: 12,
    user_name: "SAMPLE NAME",
    user_profile_desc: "SAMPLE PROFILE DESC",
  },
];

var render_USERLIST = ({ item }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          height: 65,
          width: "100%",
          backgroundColor: "#FFF",
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ width: 60, height: "100%", padding: 10 }}>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#ccc",
              borderRadius: 100,
            }}
          ></View>
        </View>

        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", paddingTop: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.user_name}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center", paddingBottom: 5 }}>
            <Text style={{ fontSize: 12 }}>{item.user_profile_desc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default class friendlistScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ height: 100, width: "100%", backgroundColor: "#ccc" }}>
          {/* Sample Title */}
        </View>
        <ScrollView style={{ height: "100%" }}>
          <FlatList
            data={data}
            renderItem={render_USERLIST}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}
