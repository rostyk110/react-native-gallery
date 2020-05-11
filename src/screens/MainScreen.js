import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { loadPhotos } from '../store/actions/photo';
import { Photo } from '../components/Photo';
import { URL } from '../config/config';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { signOut } from '../store/actions/user';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const allPhotos = useSelector((state) => state.photo.allPhotos);
  const loading = useSelector((state) => state.photo.loading);

  const Signout = () => {
    dispatch(signOut());
  };

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons title='Exit' HeaderButtonComponent={AppHeaderIcon}>
        <Item title='Exit' iconName='ios-exit' onPress={() => Signout()} />
      </HeaderButtons>
    ),
  });

  let url;

  if (searchText) {
    url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=oz3aYXukBr92KUs2Xsva6FL2Bis1q5hcs8z9ca67XTU`;
  } else {
    url = URL;
  }

  useEffect(() => {
    dispatch(loadPhotos(url));
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  const openPhotoHandler = (photo) => {
    navigation.navigate('Photo', {
      photoId: photo.id,
      date: photo.created_at,
    });
  };

  let width = Dimensions.get('screen').width / 2 - 8;

  return (
    <View style={styles.wrapper}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          placeholder='Search...'
          placeholderTextColor='#000'
          onChangeText={setSearchText}
        />
        <View style={styles.btn}>
          <TouchableNativeFeedback
            onPress={() => {
              dispatch(loadPhotos(url));
            }}
          >
            <Ionicons
              name='ios-search'
              size={32}
              color={THEME.MAIN_COLOR}
              backgroundColor='transparent'
            />
          </TouchableNativeFeedback>
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={allPhotos}
        keyExtractor={(photo) => photo.id.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <Photo
            style={{ width: width, height: width, margin: 4 }}
            photo={item}
            onOpen={openPhotoHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    margin: 10,
  },
  search: {
    padding: 10,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    marginBottom: 10,
    borderRadius: 30,
    width: '87%',
    fontSize: 16,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 10,
    marginRight: 5,
  },
});
