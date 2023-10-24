import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../src/theme';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SportWave</Text>
      <View style={styles.searchIconContainer}>
        <Icon name="search" size={24} color={colors.black()} />
      </View>
    </View>
  );
};

const styles = {
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 23,
    color: colors.white(),
    fontWeight: 'bold',
  },
  searchIconContainer: {
    // Add styles for the search icon container
  },
};

export default Header;
