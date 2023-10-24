import React from 'react';
import {ScrollView, View} from 'react-native';
import CategoryItem from './CategoryItem';
import BlogCard from './BlogCard';
import VerticalBlog from './VerticalBlog';
import {colors} from '../src/theme';

const ListBlog = () => {
  return (
    <ScrollView>
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
            <CategoryItem title="All" color={colors.blue()} isActive={true} />
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
  );
};

const styles = {
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCategory: {
    paddingVertical: 10,
  },
};

export default ListBlog;
