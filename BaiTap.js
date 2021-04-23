import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[styles.box1, styles.box]}>
        <View style={styles.content1}/>
        <View style={styles.content1}/>
      </View>
      <View style={[styles.box2, styles.box]}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.content2}/>
          <View style={styles.content2}/>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.content2}/>
          <View style={styles.content2}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: '#a1c99a',
    marginBottom: 20,
  },
  box2:{
    backgroundColor: '#c8c8fa',
  },
  content1: {
    flex: 1,
    backgroundColor: '#ffffc2',
    width: '90%',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
  },
  content2: {
    flex: 1,
    backgroundColor: '#4f82c0',
    width: 20,
  }
});
export default App;
