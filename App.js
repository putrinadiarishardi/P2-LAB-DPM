import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>TUGAS PERTEMUAN 2 DPM</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>UAS</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText2}>UTBK</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24, 
    color: 'red', 
    fontWeight: 'bold', 
    marginBottom: 60, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'purple', 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'pink', 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  boxText: {
    fontSize: 16, 
    color: 'white', 
    fontWeight: 'bold', 
  },
  boxText2: {
    fontSize: 16, 
    color: 'navy', 
    fontWeight: 'bold', 
  },
});

export default FlexBoxLayout;