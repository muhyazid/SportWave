import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import ListBlog from '../../components/ListBlog';
import {colors} from '../../src/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ListBlog />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
};
