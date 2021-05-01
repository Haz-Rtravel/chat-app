import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

var data = [
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 1,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 1,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 30,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 1,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
  {
    id: 1,
    username: "User Name",
    userid: 1,
    message_timestamp: "20210430210430",
    message_text: "Sample Message Text",
  },
];

var render_chat = ({ item }) => {
  return (
    <>
      {item.userid == 30 ? (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 2.5,
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              backgroundColor: "#ccc",
            }}
          ></TouchableOpacity>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 300 }}>User Name</Text>
            <Text
              style={{
                backgroundColor: "#ddd",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginTop: 5,
                borderRadius: 10,
                maxWidth: "65%",
              }}
            >
              Received Message
            </Text>
            <Text style={{ fontWeight: 300, color: "#ccc" }}>21:04</Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row-reverse",
            paddingHorizontal: 15,
            marginVertical: 2.5,
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              backgroundColor: "#ccc",
            }}
          ></TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Text style={{ fontWeight: 300 }}>User Name</Text>
            <Text
              style={{
                backgroundColor: "#ddd",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginTop: 5,
                borderRadius: 10,
                maxWidth: "65%",
              }}
            >
              Sended Message
            </Text>
            <Text style={{ fontWeight: 300, color: "#ccc" }}>21:05</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default class chatroomlistScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ height: 60, width: "100%", backgroundColor: "#ccc" }}>
          {/* Sample Title */}
        </View>

        <View>
          <ScrollView style={{ height: (screen.availHeight - 120) }}>
            <FlatList
              data={data}
              renderItem={render_chat}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>

          
        </View>
        <View style={{height: 60, width: '100%', backgroundColor: '#ccc', borderWidth: 1, flexDirection: 'row', padding: 5}}>
          <TextInput style={{backgroundColor: '#FFF', borderRadius: 10, flex: 1}}>

          </TextInput>
          <TouchableOpacity style={{marginLeft: 5, borderRadius: 10, backgroundColor: '#3cd653', width: 60, height: '100%'}}>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
