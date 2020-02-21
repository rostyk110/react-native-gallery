import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';

export const PhotoZoomScreen = ({ route, navigation }) => {
  // for slider :)
  const urls = () => {
    const { photoId } = route.params;
    const allPhotos = useSelector(state => state.photo.allPhotos);

    let currentIndex = 0;
    allPhotos.forEach((photo, index) =>
      photo.id === photoId ? (currentIndex = index) : null
    );

    const urls = allPhotos.map(photo => {
      return { url: photo.urls.full };
    });

    return [...urls.slice(currentIndex), ...urls.slice(0, currentIndex)];
  };

  return (
    <View style={styles.center}>
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => navigation.goBack()}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ImageViewer imageUrls={urls()} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});
