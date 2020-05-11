import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export const Photo = ({ photo, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(photo)}>
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.image}
          source={{ uri: photo.urls.small }}
        ></ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('screen').width / 2 - 15,
    height: Dimensions.get('screen').width / 2 - 15,
  },
});
