import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getMetricMetaInfo } from './utils/helpers';
import AddEntry from "./components/AddEntry"


export default class App extends React.Component {
  render(){
    return (
      <View style = {styles.container}>

        <AddEntry/>

      </View>
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