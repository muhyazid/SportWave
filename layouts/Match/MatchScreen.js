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
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../src/theme';
import BlogCard from '../../components/BlogCard';
import CategoryItem from '../../components/CategoryItem';
import VerticalBlog from '../../components/VerticalBlog';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

export default function MathScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.darkModeBlack()}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Match</Text>
        </View>
        <ScrollView>
          <View style={styles.list}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Football</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <Text style={styles.listAction}>View All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={styles.listContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {[
                {
                  icon: 'figma',
                  label: 'Pemsis vs Pemjar',
                  company: 'BRI Liga 1',
                  jobType: 'Today',
                  years: '30 Okt 2023',
                },
                {
                  icon: 'github',
                  label: 'Arema vs Bonek',
                  company: 'Premier League',
                  jobType: 'Tomorrow',
                  years: '01 Nov 2023',
                },
                {
                  icon: 'twitter',
                  label: 'Juve vs Inter',
                  company: 'Sarie-A',
                  jobType: 'Today',
                  years: '30 Okt 2023',
                },
              ].map(({icon, label, company, jobType, years}, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.card}>
                    <View style={styles.cardTop}>
                      <View style={styles.cardIcon}>
                        <FeatherIcon color="#000" name={icon} size={24} />
                      </View>

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{label}</Text>

                        <Text style={styles.cardSubtitle}>{company}</Text>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>{jobType}</Text>

                      <Text style={styles.cardFooterText}>{years}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.list}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Vollyball</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <Text style={styles.listAction}>View All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={styles.listContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {[
                {
                  icon: 'code',
                  label: 'Sby Samator vs Pertamina',
                  company: 'Pro Liga',
                  jobType: 'Today',
                  years: '30 Okt 2023',
                },
                {
                  icon: 'git-merge',
                  label: 'HalkBank vs Bankaart',
                  company: 'Turkey Vollyball',
                  jobType: 'Tomorrow',
                  years: '01 Nov 2023',
                },
              ].map(({icon, label, company, jobType, years}, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.card}>
                    <View style={styles.cardTop}>
                      <View style={styles.cardIcon}>
                        <FeatherIcon color="#000" name={icon} size={24} />
                      </View>

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{label}</Text>

                        <Text style={styles.cardSubtitle}>{company}</Text>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>{jobType}</Text>

                      <Text style={styles.cardFooterText}>{years}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.listBlog}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{gap: 15}}>
              <BlogCard
                imageUri="https://liveblog.digitalimages.sky/lc-images-sky/lcimg-f46154d3-a0c1-4b92-b462-20039d088df4.jpg"
                title="Abandoned Belgium-Sweden qualifier"
                date="Nov 10, 2023"
              />
              <BlogCard
                imageUri="https://e0.365dm.com/23/10/1600x900/skysports-manchester-united-women_6326263.jpg?20231018204930"
                title="Man Utd miss out on reaching WCL"
                date="Nov 10, 2023"
              />
              <BlogCard
                imageUri="https://e0.365dm.com/23/10/1600x900/skysports-premier-league-brighton_6325553.jpg?20231018112357"
                title="Is De Zerbi surpassing Pep as Premier League's"
                date="Nov 10, 2023"
              />
              <BlogCard
                imageUri="https://e0.365dm.com/23/10/1600x900/skysports-casemiro-man-utd_6326541.jpg?20231019091646"
                title="Man Utd midfielder showing signs of decline"
                marginRight={20}
                date="Nov 10, 2023"
              />
            </ScrollView>
            {/* Kategori */}
            <View style={styles.listCategory}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CategoryItem
                  title="All"
                  color={colors.blue()}
                  isActive={true}
                />
                <CategoryItem title="Football" color={colors.grey()} />
                <CategoryItem title="Basketball" color={colors.grey()} />
                <CategoryItem title="Volly" color={colors.grey()} />
                <CategoryItem title="Badminton" color={colors.grey()} />
                <CategoryItem
                  title="Tennis"
                  color={colors.grey()}
                  marginRight={24}
                />
              </ScrollView>
            </View>

            {/* Blog Vertikal */}
            <VerticalBlog
              imageUri="https://akcdn.detik.net.id/community/media/visual/2023/10/19/neymar-cedera-vs-uruguay-3_169.jpeg?w=700&q=90"
              category="Fashion"
              title="terkini akan absen selama 7-8 bulan karena cedera ACL.apa sudah saatnya pensiun?"
              date="Jul 25, 2023"
            />
            <VerticalBlog
              imageUri="https://e2.365dm.com/23/10/768x432/skysports-f1-plank-2021-monaco-gp_6332642.jpg?20231023144106"
              category="Sports"
              title="Exciting Sports Event"
              date="Nov 30, 2023"
            />
            <VerticalBlog
              imageUri="https://e0.365dm.com/23/10/2048x1152/skysports-tom-brady-nba-las-vegas-aces_6306984.jpg?20231003100829"
              category="Technology"
              title="Latest Technological Advancements"
              date="Dec 15, 2023"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    elevation: 8,
    paddingTop: 8,
  },
  title: {
    paddingHorizontal: 24,
    paddingVertical: 2,
    fontSize: 28,
    fontWeight: '700',
    color: '#ffff',
    marginBottom: 20, // pembatas match dan konten card dibawahnya
    marginTop: 20, // Tambahkan baris ini
  },
  text: {
    fontSize: 23,
    color: colors.white(),
    fontWeight: 'bold',
    top: -15,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: '#ffff',
  },
  listAction: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#778599',
  },
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    shadowColor: '#90a0ca',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f5',
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    color: '#121a26',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#778599',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  cardFooterText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    color: '#778599',
  },
  list: {
    marginBottom: 24,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCategory: {
    paddingVertical: 10,
  },
});
