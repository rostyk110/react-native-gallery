import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';

export const PhotoZoomScreen = ({ route, navigation }) => {
  // for slider :)
  const urls = () => {
    const { photoId } = route.params;
    const allPhotos = useSelector((state) => state.photo.allPhotos);

    let currentIndex = 0;
    allPhotos.forEach((photo, index) =>
      photo.id === photoId ? (currentIndex = index) : null
    );

    const urls = allPhotos.map((photo) => {
      return { url: photo.urls.small };
    });

    return [...urls.slice(currentIndex), ...urls.slice(0, currentIndex)];
  };

  StatusBar.setHidden(true);

  return (
    <View style={styles.center}>
      <StatusBar hidden={true} />
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => navigation.goBack()}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ImageViewer style={styles.viewer} imageUrls={urls()} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  viewer: {
    justifyContent: 'center',
    flex: 1,
  },
});
