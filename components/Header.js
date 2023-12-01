import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../src/theme';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>SportWave</Text>
      <View style={styles.searchIconContainer}>
        <TouchableOpacity
          onPress={handleSearchPress}
          style={styles.searchIconContainer}>
          <Icon name="search" size={24} color={colors.white()} />
        </TouchableOpacity>
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
};

export default Header;
