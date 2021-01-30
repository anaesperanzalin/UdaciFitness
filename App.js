import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getMetricMetaInfo } from './utils/helpers';

export default function App() {
  


  return (
    <View style={styles.container}>
      <Text>This is Ana´s React Native App!</Text>
      
      <MaterialCommunityIcons name="rice" size={80} color="black" />
      {getMetricMetaInfo('bike').getIcon()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
