import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../src/theme';
import {DocumentUpload} from 'iconsax-react-native';

const FormContent = () => {
  const dataCategory = [
    {id: 1, catename: 'Football'},
    {id: 2, catename: 'Volleyball'},
    {id: 3, catename: 'Basketball'},
    {id: 4, catename: 'Tennis'},
    {id: 5, catename: 'Badminton'},
    {id: 6, catename: 'Formula 1'},
  ];

  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    category: {},
  });

  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.white()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tulis Disini</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.borderDashed, styles.imageContainer]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // Tambahkan logika atau aksi yang diinginkan saat tombol gambar ditekan
            }}
            style={styles.imageContent}>
            {/* Ganti dengan ikon dari Iconsax */}
            <DocumentUpload size={88} color="#ffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Title"
            value={blogData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={styles.inputTitle}
          />
        </View>

        <View style={[styles.borderDashed, styles.descriptionContainer]}>
          <TextInput
            placeholder="Description"
            value={blogData.description}
            onChangeText={text => handleChange('description', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={styles.inputContent}
          />
        </View>

        <View style={styles.borderDashed}>
          <Text style={styles.categoryTitle}>Category</Text>
          <View style={styles.categoryContainer}>
            {dataCategory.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  handleChange('category', {
                    id: item.id,
                    catename: item.catename,
                  })
                }
                style={[
                  styles.categoryItem,
                  {
                    backgroundColor:
                      item.id === blogData.category.id
                        ? colors.black()
                        : colors.grey(0.08),
                  },
                ]}>
                <Text
                  style={[
                    styles.categoryName,
                    {
                      color:
                        item.id === blogData.category.id
                          ? colors.white()
                          : colors.grey(),
                    },
                  ]}>
                  {item.catename}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.uploadButton} onPress={() => {}}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.white(),
  },
  scrollViewContent: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 10,
  },
  borderDashed: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  imageContainer: {
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTitle: {
    fontSize: 16,
    color: colors.white(0.7),
    padding: 0,
  },
  descriptionContainer: {
    minHeight: 250,
  },
  inputContent: {
    fontSize: 12,
    color: colors.white(0.7),
    padding: 0,
  },
  categoryTitle: {
    fontSize: 12,
    color: colors.grey(0.6),
  },
  categoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  categoryItem: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  categoryName: {
    fontSize: 10,
  },
  bottomBar: {
    backgroundColor: colors.darkModeBlack(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uploadButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue(),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,

    color: colors.white(),
  },
});
