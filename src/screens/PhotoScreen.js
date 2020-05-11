import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

export const PhotoScreen = ({ route, navigation }) => {
  const { photoId } = route.params;

  const photo = useSelector((state) =>
    state.photo.allPhotos.find((p) => p.id === photoId)
  );

  const date = new Date(photo.created_at).toString().split(' ');
  const title = `${date[1]} ${date[2]}, ${date[3]}`;

  navigation.setOptions({
    headerTitle: title,
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PhotoZoom', {
          photoId: photo.id,
          date: photo.created_at,
        })
      }
      activeOpacity={0}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: photo.urls.small }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.title}>@{photo.user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

const screenHeight = Dimensions.get('window').height - 150;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-end',
    fontFamily: 'open-italic',
    fontSize: 16,
  },
});
