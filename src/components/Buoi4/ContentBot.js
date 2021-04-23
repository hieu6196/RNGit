import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ContentBot extends Component {
  render() {
    return (
      <View style={styles.box3}>
        <View style={styles.content2} />
        <View style={styles.content2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box3: {
    flexDirection: 'row',
    flex: 1,
  },
  content2: {
    flex: 1,
    backgroundColor: '#4f82c0',
    width: '50%',
    height: '75%',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
  },
});
