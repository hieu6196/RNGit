import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContentBot from './ContentBot';

export default class ItemBot extends Component {
  render() {
    return (
      <View style={[styles.box2, styles.box]}>
        <ContentBot />
        <ContentBot />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#c8c8fa',
  },
});
