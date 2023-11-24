import React, {useState, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../src/theme';

const Header = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SportWave</Text>
      <View style={styles.searchIconContainer}>
        <Icon name="search" size={24} color={colors.white()} />
      </View>
    </View>
  );
};

const HeaderMatch = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Match</Text>
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
    backgroundColor: '#232323',
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
