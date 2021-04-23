import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class ItemTop extends Component {
  render() {
    const textAvatar = 'RN02 -- Cao Thang';
    const iShowHide = false;
    return (
      <View style={[styles.box1, styles.box]}>
        <View style={styles.content1}>
          {/* <Image style={styles.img} source={{
            uri:
            'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-01.jpg'
          }}/> */}
          {iShowHide ? <Image style={styles.img} source={require('./cho-corgi-con.jpg')} /> : <Text>Image Hide</Text>}
          
          <Text style={styles.text}>{textAvatar}</Text>
        </View>
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
  box1: {
    backgroundColor: '#a1c99a',
    marginBottom: 20,
  },
  content1: {
    flex: 1,
    backgroundColor: '#ffffc2',
    width: '90%',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
});
