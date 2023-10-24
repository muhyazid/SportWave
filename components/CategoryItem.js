import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../src/theme';

const CategoryItem = ({title, color, marginRight, isActive}) => {
  return (
    <View style={{...styles.item, marginRight: marginRight}}>
      <Text
        style={{
          ...styles.title,
          color: color,
          borderBottomWidth: isActive ? 2 : 0,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.white(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    color: colors.grey(),
  },
};

export default CategoryItem;
