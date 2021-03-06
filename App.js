import React from 'react';
import { View, StyleSheet, Text, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getMetricMetaInfo } from './utils/helpers';
import AddEntry from "./components/AddEntry"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './components/reducers'
import {purple, white } from './utils/colors'
import { FontAwesome , Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import History from './components/history'


function UdaciStatusBar({backgroundColor, ...props}){
  return(
    <View style= {{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor = {backgroundColor} {...props}/>


    </View>
  )

}


function Home(){
  return (
    <View style= {styles.container}>
      <Text>HOME </Text>
      
      <AddEntry/>

    </View>
  )
}

function Dashboard (){
  return (
    <View style = {styles.container}>
      <Text> Dashboard </Text>

    </View>
  )
}

const Tab = createBottomTabNavigator();




export default class App extends React.Component {
  render(){
    return (
      <Provider store ={createStore(reducer)}>
        <UdaciStatusBar backgroundColor={purple} barStyle = 'light-content'/>
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name= "Home" component= {Home}/>
          <Tab.Screen name= "Dashboard" component = {Dashboard}/>
        </Tab.Navigator>

        </NavigationContainer>

      {/* <View style = {styles.container}>

        <AddEntry/>
      </View> */}
      </Provider>
    )
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});