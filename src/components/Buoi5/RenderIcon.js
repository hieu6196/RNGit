import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconButton from './IconButton'


// Note: Chưa truyền hàm changeImage qua bên component IconButton được

export default class RenderIcon extends Component {
  constructor(props){
    super(props);
  };
  state = {
    url: require('../../Assets/angry.png'),
  };
  changeImage = (url) => {
    this.setState ({
        url
    })
};
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Image source={this.state.url}></Image>
        <View style={styles.btn}>
          <IconButton icon={require('../../Assets/angry.png')}></IconButton>
          <IconButton icon={require('../../Assets/care.png')}></IconButton>
          <IconButton icon={require('../../Assets/haha.png')}></IconButton>
          <IconButton icon={require('../../Assets/like.png')}></IconButton>
          <IconButton icon={require('../../Assets/sad.png')}></IconButton>
          <IconButton icon={require('../../Assets/love.png')}></IconButton>
          {/* <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              this.changeImage(require('../../Assets/care.png'))
          }}>
            <Image
              style={styles.img}
              source={require('../../Assets/care.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              this.changeImage(require('../../Assets/haha.png'))
          }}>
            <Image
              style={styles.img}
              source={require('../../Assets/haha.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              this.changeImage(require('../../Assets/like.png'))
          }}>
            <Image
              style={styles.img}
              source={require('../../Assets/like.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              this.changeImage(require('../../Assets/sad.png'))
          }}>
            <Image
              style={styles.img}
              source={require('../../Assets/sad.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              this.changeImage(require('../../Assets/love.png'))
          }}>
            <Image
              style={styles.img}
              source={require('../../Assets/love.png')}></Image>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
  },
  btnContainer: {
    margin: 30,
    flex: 1,
    alignItems: 'center'
  },
  img: {
    width: 50,
    height: 50,
  },
});
