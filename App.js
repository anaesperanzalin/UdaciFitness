import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getMetricMetaInfo } from './utils/helpers';
import AddEntry from "./components/AddEntry"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './components/reducers'



export default class App extends React.Component {
  render(){
    return (
      <Provider store ={createStore(reducer)}>
      <View style = {styles.container}>

        <AddEntry/>

      </View>
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