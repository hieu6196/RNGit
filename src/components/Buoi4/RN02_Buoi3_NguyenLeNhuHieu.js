import React from 'react';
import {View} from 'react-native';
import ItemTop from './ItemTop';
import ItemBot from './ItemBot';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ItemTop />
      <ItemBot />
    </View>
  );
};

export default App;
