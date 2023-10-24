import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors} from '../src/theme';

const VerticalBlog = ({imageUri, category, title, date}) => {
  return (
    <View style={styles.listCard}>
      <View style={styles.cardItem}>
        <Image style={styles.cardImage} source={{uri: imageUri}} />
        <View style={styles.cardContent}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{gap: 5, width: '70%'}}>
              <Text style={styles.cardCategory}>{category}</Text>
              <Text style={styles.cardTitle}>{title}</Text>
            </View>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardText}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  listCard: {
    paddingHorizontal: 0,
    paddingVertical: 3,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.grey(0.09),
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 13,
  },
  cardTitle: {
    fontSize: 14,
    color: colors.grey(),
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 10,
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 500,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row-reverse',
    gap: 20,
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
};

export default VerticalBlog;
