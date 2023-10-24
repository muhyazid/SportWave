import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {colors} from '../src/theme';

const BlogCard = ({imageUri, title, date, marginRight}) => {
  return (
    <View style={{...styles.cardItem, marginRight: marginRight}}>
      <ImageBackground
        style={styles.cardImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 15}}
        source={{uri: imageUri}}>
        <View style={styles.cardContent}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardText}>{date}</Text>
          </View>
          <View style={styles.cardIcon}>{/* Add icons here */}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  cardItem: {
    width: 280,
    // Add card item styles
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
  cardTitle: {
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
};

export default BlogCard;
