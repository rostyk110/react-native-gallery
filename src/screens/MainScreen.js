import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { loadPhotos } from '../store/actions/photo';
import { Photo } from '../components/Photo';
import { URL } from '../config/config';
import { THEME } from '../theme';

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos(URL));
  }, [dispatch]);

  const openPhotoHandler = photo => {
    navigation.navigate('Photo', {
      photoId: photo.id,
      date: photo.created_at
    });
  };

  const allPhotos = useSelector(state => state.photo.allPhotos);
  const loading = useSelector(state => state.photo.loading);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={allPhotos}
        keyExtractor={photo => photo.id.toString()}
        renderItem={({ item }) => (
          <Photo photo={item} onOpen={openPhotoHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
