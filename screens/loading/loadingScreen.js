import { NavigationContainer } from "@react-navigation/native";
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

export default class loadingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <View style={{marginVertical: 5, borderBottomWidth: 1, paddingBottom: 10}}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Home')}
            style={{borderRadius: 10, padding: 100, backgroundColor: '#ccc'}}>

          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 20, fontWeight: '300'}}>APP NAME</Text>
        
      </View>
    );
  }
}