import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from './components/Header';
import ListBlog from './components/ListBlog';
import {colors} from './src/theme';
import ProfileScreen from './layouts/Profile/ProfileScreen';
import MatchScreen from './layouts/Match/MatchScreen';
import moment from 'moment';
import Swiper from 'react-native-swiper';

// export default function Match() {
//   return <Match />;
// }
// function App() {
//   return <MatchScreen />;
// }

export function App() {
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

export default App;
