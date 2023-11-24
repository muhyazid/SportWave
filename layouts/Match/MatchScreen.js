import React, {useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import {colors} from '../../src/theme';
import {ArrowRight, Image} from 'iconsax-react-native';
import SkorComponent from '../../components/SkorComponent'; // Impor komponen baru

export default function MatchScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        contentContainerStyle={{}}>
        <View style={styles.container}>
          <Animated.View
            style={[styles.header, {transform: [{translateY: recentY}]}]}>
            <Text style={styles.headerText}>Match</Text>
          </Animated.View>

          <View style={styles.matchContainer}>
            <View style={{...styles.matchInfo, gap: 250}}>
              <View style={styles.matchTitleContainer}>
                <Text style={styles.matchTitle}>FOOTBALL</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}>
                <ArrowRight size="32" color="#2746E1" opacity={0.8} />
              </TouchableOpacity>
            </View>

            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Myanmar</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>North Korea</Text>
                </View>
              </View>
              <View style={{marginLeft: 97, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
            {/* Konten Kedua */}
            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Indonesia</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Iran</Text>
                </View>
              </View>
              <View style={{marginLeft: 110, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
          </View>
          {/* VOLLYBALL */}
          <View style={{...styles.matchContainer, marginTop: -30}}>
            <View style={{...styles.matchInfo, gap: 250}}>
              <View style={styles.matchTitleContainer}>
                <Text style={styles.matchTitle}>VOLLYBALL</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}>
                <ArrowRight size="30" color="#2746E1" opacity={0.8} />
              </TouchableOpacity>
            </View>

            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Myanmar</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>North Korea</Text>
                </View>
              </View>
              <View style={{marginLeft: 97, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
            {/* Konten Kedua */}
            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Indonesia</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Iran</Text>
                </View>
              </View>
              <View style={{marginLeft: 110, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
          </View>
          {/* BASKETBALL */}
          <View style={{...styles.matchContainer, marginTop: -30}}>
            <View style={{...styles.matchInfo, gap: 240}}>
              <View style={styles.matchTitleContainer}>
                <Text style={styles.matchTitle}>BASKETBALL</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}>
                <ArrowRight size="30" color="#2746E1" opacity={0.8} />
              </TouchableOpacity>
            </View>

            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Myanmar</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>North Korea</Text>
                </View>
              </View>
              <View style={{marginLeft: 97, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
            {/* Konten Kedua */}
            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Indonesia</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Iran</Text>
                </View>
              </View>
              <View style={{marginLeft: 110, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
          </View>
          {/* BADMINTON */}
          <View style={{...styles.matchContainer, marginTop: -30}}>
            <View style={{...styles.matchInfo, gap: 240}}>
              <View style={styles.matchTitleContainer}>
                <Text style={styles.matchTitle}>BADMINTON</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}>
                <ArrowRight size="30" color="#2746E1" opacity={0.8} />
              </TouchableOpacity>
            </View>

            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Myanmar</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>North Korea</Text>
                </View>
              </View>
              <View style={{marginLeft: 97, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
            {/* Konten Kedua */}
            <View style={styles.matchDetails}>
              <View style={styles.matchScore}>
                <Text>FT</Text>
              </View>
              <View style={styles.teamDetails}>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Indonesia</Text>
                </View>
                <View style={styles.teamInfo}>
                  <Image size="25" color="#2746E1" />
                  <Text>Iran</Text>
                </View>
              </View>
              <View style={{marginLeft: 110, gap: 17}}>
                <Text>1</Text>
                <Text>6</Text>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    zIndex: 999,
    left: 0,
    right: 0,
    elevation: 1000,
  },
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

    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
  },
  headerText: {
    fontSize: 23,
    color: colors.white(),
    fontWeight: 'bold',
    alignItems: 'center',
  },
  matchContainer: {
    padding: 17,

    flexDirection: 'column',
  },
  matchInfo: {
    flexDirection: 'row',
  },
  matchTitleContainer: {
    marginBottom: 25,
  },
  matchTitle: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 7,
  },
  matchDetails: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#232323',
    borderRadius: 20,
    gap: 40,
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 17,
  },
  matchScore: {
    marginLeft: 10,
    gap: 17,
  },
  teamDetails: {
    gap: 10,
  },
  teamInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  scoreInfo: {
    marginLeft: 100,
    gap: 17,
  },
});
