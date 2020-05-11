import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, hideError } from '../store/actions/user';
import { THEME } from '../theme';

export const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const error = useSelector((state) => state.users.error);

  if (error) {
    Alert.alert(error.msg);
    return dispatch(hideError());
  }

  const register = () => {
    if (password !== cpassword) {
      setPassword('');
      setCpassword('');
      return Alert.alert('Different passwords');
    }

    dispatch(registerUser(email, password));
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        textContentType='emailAddress'
        onChangeText={setEmail}
        value={email}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm password'
        onChangeText={setCpassword}
        value={cpassword}
        secureTextEntry={true}
      />

      <View style={styles.button}>
        <Button
          title='Register'
          onPress={() => register()}
          color='green'
          style={styles.button}
        />
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
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    borderStyle: 'solid',
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
