import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, hideError } from '../store/actions/user';

export const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector((state) => state.users.error);

  if (error) {
    Alert.alert(error.msg);
    dispatch(hideError());
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        textContentType='emailAddress'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='SignUp'
            onPress={() => navigation.navigate('Sign up')}
            color={THEME.MAIN_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Login'
            onPress={() => dispatch(loginUser(email, password))}
            color='green'
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: -80,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  buttons: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 20,
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
