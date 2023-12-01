import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontType} from '../../src/theme';
import {SearchBar} from '../../components';

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  header: {
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.darkModeBlack(),
  },
});
