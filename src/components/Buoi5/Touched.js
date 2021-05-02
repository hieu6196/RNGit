import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Touched extends Component {
  handleOnPress = param => {
    console.log(param);
  };
  handleOnPress2 = () => {
    console.log('Pressed');
  };
  handleOnPress3 = () => {
    console.clear();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Touchable </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={()=> {
              // Sử dụng callback function để truyền param
              this.handleOnPress('RN02')
          }}>
          <Text style={styles.txtBtn}>Btn Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.handleOnPress2}
          underlayColor="red">
          <Text style={styles.txtBtn}>Btn Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={this.handleOnPress3}>
          <Text style={styles.txtBtn}>Btn Touchable Without Feedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// rns: cú pháp tạo nhanh styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#bfb',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  txtBtn: {
    fontSize: 20,
  },
});
