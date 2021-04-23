import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Buoi3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.purple]}>
          <Text>Purple</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.box, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.yellow]}>
          <Text>Yellow</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    box: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderRadius: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    purple: {
      backgroundColor: '#C9C9FF',
    },
    blue: {
      backgroundColor: '#3D85C6',
    },
    green: {
      backgroundColor: '#96CC96',
    },
    yellow: {
      backgroundColor: '#F4B940',
    },
  });