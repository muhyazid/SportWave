import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../src/theme';
import {Setting2, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?auto=format&fit=crop&q=80&w=1784&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{flex: 0.5}}
        resizeMode={'cover'}>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: colors.darkModeBlack()}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/D5603AQF2e_coocZ_KA/profile-displayphoto-shrink_100_100/0/1697936135799?e=1703721600&v=beta&t=ObSwx3GOBJwhzjQpMSlFbAlfF8zMHwZQcW7DrNkQegA',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#FFFFFF',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#ffff',
            }}>
            Muhammad Yazid Abu Sahal
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              padding: 15,
              fontStyle: 'italic',
            }}>
            "Effort, dedication, work hard, because talent is not enough
            anymore."
          </Text>
          {/*group all in (hp, location, message) */}
          <View style={{marginLeft: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="mobile-alt" size={25} color="#fff" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold', color: '#fff', opacity: 0.6}}>
                  +6281-2338-58380
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="map-marker-alt" size={25} color="#fff" />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 10,
                  flex: 1,
                  paddingVertical: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: '#fff', opacity: 0.6}}>
                  Sidoarjo - Jawa Timur
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="envelope" size={25} color="#fff" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold', color: '#fff', opacity: 0.6}}>
                  yazidabusahal@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="twitter" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="linkedin" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Form')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default ProfileScreen;
