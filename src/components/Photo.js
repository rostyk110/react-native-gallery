import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';

export const Photo = ({ photo, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(photo)}>
      <View style={styles.photo}>
        <ImageBackground
          style={styles.image}
          source={{ uri: photo.urls.small }}
        >
          <View style={styles.textWrap}>
            <Text style={styles.title}>{photo.user.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photo: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
});
