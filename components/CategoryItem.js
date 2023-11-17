import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../src/theme';

const CategoryItem = ({title, color, marginRight, isActive}) => {
  const [selected, setSelected] = useState(1);
  return (
    <TouchableOpacity style={{...styles.item, marginRight: marginRight}}>
      <Text
        style={{
          ...styles.title,
          color: color,
          borderBottomWidth: isActive ? 2 : 0,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
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
