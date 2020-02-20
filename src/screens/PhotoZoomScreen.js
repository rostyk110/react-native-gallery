import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';

export const PhotoZoomScreen = ({ route, navigation }) => {
  const { photoId } = route.params;

  // Slider :)
  const allPhotos = useSelector(state => state.photo.allPhotos);

  let currentIndex = 0;
  allPhotos.forEach((photo, index) =>
    photo.id === photoId ? (currentIndex = index) : null
  );

  const urls = allPhotos.map(photo => {
    return { url: photo.urls.full };
  });

  const result = [...urls.slice(currentIndex), ...urls.slice(0, currentIndex)];

  return (
    <View style={styles.center}>
      <StatusBar barStyle='dark-content' backgroundColor='#000' />
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={() => navigation.goBack()}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ImageViewer imageUrls={result} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});
