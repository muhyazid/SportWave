import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../src/theme';
import {formatDate} from '../src/utils/formatDate';

const TempContent = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.listBlog}>
      <TouchableOpacity
        style={styles.cardItem}
        onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: item?.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.cardContent}>
          <View
            style={{
              flexDirection: 'row',
              gap: 30,
            }}>
            <View style={{gap: 5, flex: 1}}>
              <Text style={styles.cardCategory}>{item.category?.name}</Text>
              <Text style={styles.cardTitle}>{item?.title}</Text>
            </View>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardText}>{formatDate(item?.createdAt)}</Text>
            <Text style={styles.cardText}>{item?.totalComments}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TempContent;

const styles = StyleSheet.create({
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCategory: {
    paddingVertical: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.grey(0.07),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
  },
  cardTitle: {
    fontSize: 14,

    color: colors.white(),
  },
  cardText: {
    fontSize: 10,

    color: colors.white(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
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
