import {Alert, TextInput, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppContainer from '../../components/AppContainer';
import AppText from '../../components/AppText';
import {useStyle} from './style';
import AppButton from '../../components/AppButton';
import {useLoadingStore} from '../../hooks/useLoadingStore';
import {useAuthStore} from '../../hooks/useAuthStore';

const Login = () => {
  const styles = useStyle();
  const {setLoading} = useLoadingStore();
  const {setAuth} = useAuthStore();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = useCallback(() => {
    if (!userName || !password) {
      return Alert.alert('Error', 'Invalid user name or password');
    }

    setLoading(true);
    return setTimeout(() => {
      if (userName === 'Admin' && password === 'Admin') {
        setAuth(true);
      } else {
        Alert.alert('Error', 'Incorrect user name or password');
      }
      setLoading(false);
    }, 2000);
  }, [password, setAuth, setLoading, userName]);

  return (
    <AppContainer>
      <AppText style={styles.title}>Login</AppText>
      <View style={styles.inputContainer}>
        <AppText style={styles.label}>User name</AppText>
        <TextInput
          onChangeText={setUserName}
          placeholderTextColor={styles.placeholderTextStyle.color}
          style={styles.input}
          placeholder="Enter user name - default:Admin"
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.label}>Password</AppText>
        <TextInput
          secureTextEntry
          onChangeText={setPassword}
          placeholderTextColor={styles.placeholderTextStyle.color}
          style={styles.input}
          placeholder="Enter password - default:Admin"
        />
      </View>
      <AppButton onPress={onPressLogin} label="Login" />
    </AppContainer>
  );
};

export default Login;
