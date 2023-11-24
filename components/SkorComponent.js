// Buat file SkorComponent.js
import React from 'react';
import {View, Text} from 'react-native';

const SkorComponent = ({skor1, skor2}) => {
  return (
    <View style={{marginLeft: 5, gap: 17}}>
      <Text>{skor1}</Text>
      <Text>{skor2}</Text>
    </View>
  );
};

export default SkorComponent;
