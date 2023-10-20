/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Element3, Receipt21, Clock, Message} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SportWave</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>All</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Football</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Basketball</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Volly</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Badminton</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Tennis</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.white(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 12}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-neymar-injured-brazil_6326292.jpg?20231018214429',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Neymar to undergo surgery after ACL injury
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://liveblog.digitalimages.sky/lc-images-sky/lcimg-f46154d3-a0c1-4b92-b462-20039d088df4.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Abandoned Belgium-Sweden qualifier
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-manchester-united-women_6326263.jpg?20231018204930',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Man Utd miss out on reaching WCL
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-premier-league-brighton_6325553.jpg?20231018112357',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Is De Zerbi surpassing Pep as Premier League's
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-casemiro-man-utd_6326541.jpg?20231019091646',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Man Utd midfielder showing signs of decline
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-premier-league-bournemouth_6318238.jpg?20231011154500',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                </View>
                <View style={{alignItems: 'stretch'}}></View>
                <View style={itemVertical.cardInfo}>
                  <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                  <Text style={{...itemVertical.cardText, paddingRight: 10}}>
                    1 hours ago
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://e0.365dm.com/23/10/1600x900/skysports-brighton-aston-villa_6325832.jpg?20231018143350',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardTitle}>
                    The race to climb into the Champions League spots
                  </Text>
                  <Text style={itemVertical.cardCategory}>Premier League</Text>
                </View>
              </View>
              <View style={{alignItems: 'stretch'}}></View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={{...itemVertical.cardText, paddingRight: 10}}>
                  week ago
                </Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/08/25/bagas-maulana-muhammad-shohibul-fikri-1_169.webp?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    Bagas/Fikri Pijak Babak Kedua Denmark Open 2023
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/10/08/oscar-piastri_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>Sneaker Culture</Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/10/15/francesco-bagnaia-juara-motogp-mandalika-2023-1_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Lifestyle</Text>
                  <Text style={itemVertical.cardTitle}>
                    Balancing Work and Well-being
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/10/16/jude-bellingham-1_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Home Fitness Revolution
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2023/10/19/neymar-cedera-vs-uruguay-3_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>
                    Intersection of Fashion
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.white(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.white(),
    fontSize: 13,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.grey(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(0.6),
  },
  cardImage: {
    width: 96,
    height: 82,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '70%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
