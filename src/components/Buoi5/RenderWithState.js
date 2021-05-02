import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class RenderWithState extends Component {
  // c1: sử dụng constructor để khai báo
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  // c2: khai báo state rút gọn
  state = {
    isLogin: true,
  };

  handleLogin = () => {
    this.setState(
      {
        isLogin: false,
      },
      () => {
        console.log(this.state.isLogin);
      },
    );
  };

  handleLogout = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      },
    );
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Text style={styles.txt}>Hello React Native 02</Text>
          <TouchableOpacity style={styles.btn} onPress={this.handleLogin}>
            <Text style={styles.txt}>Log Out</Text>
          </TouchableOpacity>
        </>
      );
    }
    return (
      <TouchableOpacity style={styles.btn} onPress={this.handleLogout}>
        <Text style={styles.txt}>Log in</Text>
      </TouchableOpacity>
    );
  };
  render() {
    console.log('test');
    return <View style={styles.container}>{this.renderLogin()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#bbf',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
