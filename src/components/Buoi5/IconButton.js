import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import RenderIcon from './RenderIcon'

export default class IconButton extends Component {
  constructor(props) {
    super(props);
    
  };
  render() {
      console.log(this.props);
    return (
      <View>
        <TouchableOpacity style={styles.btnContainer} onPress={()=>{
              <RenderIcon changeImage={this.props.icon}/>
          }}>
            <Image
              style={styles.img}
              source={this.props.icon}></Image>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});
